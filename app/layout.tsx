import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "गुरुजी धार्मिक सेवा",
    template: "%s | गुरुजी धार्मिक सेवा",
  },
  description:
    "शास्त्रोक्त पूजा, संस्कार, शांती विधी, श्राद्ध, याग, विवाह व धार्मिक सेवांसाठी संपर्क करा.",
  keywords: [
    "पूजा",
    "गुरुजी",
    "धार्मिक सेवा",
    "शांती विधी",
    "विवाह पूजा",
    "मुहूर्त",
    "१६ संस्कार",
    "महाराष्ट्र",
  ],
  openGraph: {
    title: "गुरुजी धार्मिक सेवा",
    description:
      "भक्ती, श्रद्धा आणि सेवेसाठी एकत्र येऊया.",
    type: "website",
    locale: "mr_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr">
      <body>{children}</body>
    </html>
  );
}
