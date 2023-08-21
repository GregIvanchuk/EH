import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./Redux/provider";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eternally Healthy',
  description: 'Store of sports nutrition and vitamins',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Providers>{children}</Providers>
        </body>
    </html>
  )
}
