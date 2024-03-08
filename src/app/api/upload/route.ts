//post function handler
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import pcap from "pcap-parser";
export async function POST(req: NextRequest) {
  //get the incoming file and save on the server with appropriate filename
  const formData = await req.formData();
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  console.log(file);
  const buffer = Buffer.from(await (file as Blob).arrayBuffer());
  const filename = `${Date.now()}-test.pcap`;

  console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), "public/assets/" + filename),
      buffer
    );
    const parser = pcap.parse(process.cwd() + "/public/assets/" + filename);
    parser.on("packet", (packet) => {
      console.log(packet);
    });

    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
}
