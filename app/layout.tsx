import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Billy's Software Engineer Portfolio",
  description: "Software engineer specializing in modern web solutions that power companies and impact the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
        {gaId && process.env.NODE_ENV === "production" && (
          <GoogleAnalytics gaId={gaId} />
        )}
      </body>
    </html>
  );
}
