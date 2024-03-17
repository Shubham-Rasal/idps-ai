"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// ip_src,
//   ip_dst,
//   prt_src,
//   prt_dst,
//   proto,
//   fwd_num_pkts,
//   bwd_num_pkts,
//   fwd_mean_iat,
//   bwd_mean_iat,
//   fwd_std_iat,
//   bwd_std_iat,
//   fwd_min_iat,
//   bwd_min_iat,
//   fwd_max_iat,
//   bwd_max_iat,
//   fwd_mean_pkt_len,
//   bwd_mean_pkt_len,
//   fwd_std_pkt_len,
//   bwd_std_pkt_len,
//   fwd_min_pkt_len,
//   bwd_min_pkt_len,
//   fwd_max_pkt_len,
//   bwd_max_pkt_len,
//   fwd_num_bytes,
//   bwd_num_bytes,
//   fwd_num_psh_flags,
//   bwd_num_psh_flags,
//   fwd_num_rst_flags,
//   bwd_num_rst_flags,
//   fwd_num_urg_flags,
//   bwd_num_urg_flags,
//   is_attack;

export type NetworkPackets = {
  id: string;
  ip_src: string;
  ip_dst: string;
  prt_src: number;
  prt_dst: number;
  proto: number;
  fwd_num_pkts: number;
  bwd_num_pkts: number;
  fwd_mean_iat: number;
  bwd_mean_iat: number;
  fwd_std_iat: number;
  bwd_std_iat: number;
  fwd_min_iat: number;
  bwd_min_iat: number;
  fwd_max_iat: number;
  bwd_max_iat: number;
  fwd_mean_pkt_len: number;
  bwd_mean_pkt_len: number;
  fwd_std_pkt_len: number;
  bwd_std_pkt_len: number;
  fwd_min_pkt_len: number;
  bwd_min_pkt_len: number;
  fwd_max_pkt_len: number;
  bwd_max_pkt_len: number;
  fwd_num_bytes: number;
  bwd_num_bytes: number;
  fwd_num_psh_flags: number;
  bwd_num_psh_flags: number;
  fwd_num_rst_flags: number;
  bwd_num_rst_flags: number;
  fwd_num_urg_flags: number;
  bwd_num_urg_flags: number;
  is_attack: boolean;
  prediction: string;
};

export const columns: ColumnDef<NetworkPackets>[] = [
  
  {
    accessorKey: "ip_dst",
    header: "Destination IP",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("ip_dst")}</div>
    ),
  },
  {
    accessorKey: "ip_src",
    header: "Source IP",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("ip_src")}</div>
    ),
  },
  {
    accessorKey: "prt_dst",
    header: "Destination Port",
    cell: ({ row }) => <div>{row.getValue("prt_dst")}</div>,
  },
  {
    accessorKey: "prt_src",
    header: "Source Port",
    cell: ({ row }) => <div>{row.getValue("prt_src")}</div>,
  },
  {
    accessorKey: "proto",
    header: "Protocol",
    cell: ({ row }) => <div>{row.getValue("proto")}</div>,
  },
  {
    accessorKey: "fwd_num_pkts",
    header: "Forward Packets",
    cell: ({ row }) => <div>{row.getValue("fwd_num_pkts")}</div>,
  },
  {
    accessorKey: "bwd_num_pkts",
    header: "Backward Packets",
    cell: ({ row }) => <div>{row.getValue("bwd_num_pkts")}</div>,
  },
  {
    accessorKey: "fwd_mean_iat",
    header: "Forward Mean IAT",
    cell: ({ row }) => <div>{row.getValue("fwd_mean_iat")}</div>,
  },
  {
    accessorKey: "bwd_mean_iat",
    header: "Backward Mean IAT",
    cell: ({ row }) => <div>{row.getValue("bwd_mean_iat")}</div>,
  },
  {
    accessorKey: "fwd_std_iat",
    header: "Forward Std IAT",
    cell: ({ row }) => <div>{row.getValue("fwd_std_iat")}</div>,
  },
  {
    accessorKey: "bwd_std_iat",
    header: "Backward Std IAT",
    cell: ({ row }) => <div>{row.getValue("bwd_std_iat")}</div>,
  },
  {
    accessorKey: "fwd_min_iat",
    header: "Forward Min IAT",
    cell: ({ row }) => <div>{row.getValue("fwd_min_iat")}</div>,
  },
  {
    accessorKey: "bwd_min_iat",
    header: "Backward Min IAT",
    cell: ({ row }) => <div>{row.getValue("bwd_min_iat")}</div>,
  },
  {
    accessorKey: "fwd_max_iat",
    header: "Forward",
    cell: ({ row }) => <div>{row.getValue("fwd_max_iat")}</div>,
  },
  {
    accessorKey: "bwd_max_iat",
    header: "Backward Max IAT",
    cell: ({ row }) => <div>{row.getValue("bwd_max_iat")}</div>,
  },
  {
    accessorKey: "fwd_mean_pkt_len",
    header: "Forward Mean Packet Length",
    cell: ({ row }) => <div>{row.getValue("fwd_mean_pkt_len")}</div>,
  },
  {
    accessorKey: "bwd_mean_pkt_len",
    header: "Backward Mean Packet Length",
    cell: ({ row }) => <div>{row.getValue("bwd_mean_pkt_len")}</div>,
  },
  {
    accessorKey: "fwd_std_pkt_len",
    header: "Forward Std Packet Length",
    cell: ({ row }) => <div>{row.getValue("fwd_std_pkt_len")}</div>,
  },
  {
    accessorKey: "bwd_std_pkt_len",
    header: "Backward Std Packet Length",
    cell: ({ row }) => <div>{row.getValue("bwd_std_pkt_len")}</div>,
  },
  {
    accessorKey: "fwd_min_pkt_len",
    header: "Forward Min Packet Length",
    cell: ({ row }) => <div>{row.getValue("fwd_min_pkt_len")}</div>,
  },
  {
    accessorKey: "bwd_min_pkt_len",
    header: "Backward Min Packet Length",
    cell: ({ row }) => <div>{row.getValue("bwd_min_pkt_len")}</div>,
  },
  {
    accessorKey: "fwd_max_pkt_len",
    header: "Forward Max Packet Length",
    cell: ({ row }) => <div>{row.getValue("fwd_max_pkt_len")}</div>,
  },
  {
    accessorKey: "bwd_max_pkt_len",
    header: "Backward Max Packet Length",
    cell: ({ row }) => <div>{row.getValue("bwd_max_pkt_len")}</div>,
  },
  {
    accessorKey: "fwd_num_bytes",
    header: "Forward Number of Bytes",
    cell: ({ row }) => <div>{row.getValue("fwd_num_bytes")}</div>,
  },
  {
    accessorKey: "bwd_num_bytes",
    header: "Backward Number of Bytes",
    cell: ({ row }) => <div>{row.getValue("bwd_num_bytes")}</div>,
  },
  {
    accessorKey: "fwd_num_psh_flags",
    header: "Forward Number of PSH Flags",
    cell: ({ row }) => <div>{row.getValue("fwd_num_psh_flags")}</div>,
  },
  {
    accessorKey: "bwd_num_psh_flags",
    header: "Backward Number of PSH Flags",
    cell: ({ row }) => <div>{row.getValue("bwd_num_psh_flags")}</div>,
  },
  {
    accessorKey: "fwd_num_rst_flags",
    header: "Forward Number of RST Flags",
    cell: ({ row }) => <div>{row.getValue("fwd_num_rst_flags")}</div>,
  },
  {
    accessorKey: "bwd_num_rst_flags",
    header: "Backward Number of RST Flags",
    cell: ({ row }) => <div>{row.getValue("bwd_num_rst_flags")}</div>,
  },
  {
    accessorKey: "fwd_num_urg_flags",
    header: "Forward Number of URG Flags",
    cell: ({ row }) => <div>{row.getValue("fwd_num_urg_flags")}</div>,
  },
  {
    accessorKey: "bwd_num_urg_flags",
    header: "Backward Number of URG Flags",
    cell: ({ row }) => <div>{row.getValue("bwd_num_urg_flags")}</div>,
  },
  {
    accessorKey: "is_attack",
    header: "Is Attack",
    cell: ({ row }) => <div>{row.getValue("is_attack")}</div>,
  },
  {
    accessorKey: "prediction",
    header: "Predicted Attack",
    cell: ({ row }) => <div className={row.getValue("prediction") === "Attack" ? "text-red-500" : "text-green-500"}>{row.getValue("prediction")}</div>,
    
  },
];

export function DataTableDemo({ data }: { data: NetworkPackets[] }) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
