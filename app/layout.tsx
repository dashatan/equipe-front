import { Providers } from "@/store/Provider"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Equipe",
  description: "Get Together!",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{direction:"rtl"}}>
        <Providers>{children}</Providers>
        <Toaster/>
      </body>
    </html>
  )
}
