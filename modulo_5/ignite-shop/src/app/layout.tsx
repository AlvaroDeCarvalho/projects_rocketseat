import {Roboto} from "next/font/google"
import { ThemeProviderStyles } from "@/styles/ThemeProviderStyles"
import GlobalHeader from "@/components/GlobalHeader"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const roboto = Roboto({
  subsets: ["latin"],
  display: 'swap',
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={roboto.className}>
              <body>
        <ThemeProviderStyles>
                <GlobalHeader>
                    {children}
                </GlobalHeader>
        </ThemeProviderStyles>
              </body>
    </html>
  )
}
