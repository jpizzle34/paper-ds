import { Geist, Geist_Mono } from "next/font/google"

import "@paper-ds/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@paper-ds/ui/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
