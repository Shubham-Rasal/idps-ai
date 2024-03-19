import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Network Intrusion Detection System",
  description: "AI based Network Intrusion Detection System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex w-full bg-slate-800 items-center just px-4 py-4 md:px-6">
          <div>
            <img
              src="/logo.png"
              alt="nitk-logo"
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>

          <div className="flex-1 text-white text-2xl text-center font-bold">
            Department of Information Technology, NITK
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
