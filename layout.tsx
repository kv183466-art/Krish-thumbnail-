import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

export const metadata: Metadata = {
  title: "Krish Thumbnail - Professional YouTube Thumbnail Creator",
  description:
    "Create stunning YouTube thumbnails with professional templates at krishthumbnail.com. Boost your social media with top creator templates and custom designs.",
  keywords: "YouTube thumbnails, thumbnail creator, social media templates, video thumbnails, Krish Thumbnail",
  authors: [{ name: "Krish Thumbnail" }],
  creator: "Krish Thumbnail",
  publisher: "Krish Thumbnail",
  metadataBase: new URL("https://www.krishthumbnail.com"),
  alternates: {
    canonical: "https://www.krishthumbnail.com",
  },
  openGraph: {
    title: "Krish Thumbnail - Professional YouTube Thumbnail Creator",
    description:
      "Create stunning YouTube thumbnails with professional templates. Boost your social media with top creator templates.",
    url: "https://www.krishthumbnail.com",
    siteName: "Krish Thumbnail",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krish Thumbnail - Professional YouTube Thumbnail Creator",
    description: "Create stunning YouTube thumbnails with professional templates.",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
