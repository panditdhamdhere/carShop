import { Footer, NavBar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover the best card in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}</body>
        <Footer />
    </html>
  )
}
