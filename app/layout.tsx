import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Supplier Connect – B2B RFQ & Messaging",
  description:
    "Connect buyers and suppliers for hotel, construction, and procurement projects. Create RFQs, message suppliers, and close deals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
