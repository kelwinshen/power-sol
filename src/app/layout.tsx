import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Power Rhino",
  description: "Power White Rhino on Sol (CTO)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <meta property="og:image" content="/assets/ogImage.jpg" />
      <meta property="og:image:type" content="image/jpeg" />
      
      <meta property="og:url" content="https://powerrhino.fun/" />
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Power Rhino"/>
      <meta property="og:description" content="Power White Rhino on Sol (CTO)"/>
      <meta property="og:image" content="../assets/ogImage.jpg"/>


      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="twitter:domain" content="powerrhino.fun"/>
      <meta property="twitter:url" content="https://powerrhino.fun/"/>
      <meta name="twitter:title" content="Power Rhino"/>
      <meta name="twitter:description" content="Power White Rhino on Sol (CTO)"/>
      <meta name="twitter:image" content="/assets/ogImage.jpg"/>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}





