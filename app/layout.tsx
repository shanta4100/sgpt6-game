import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

export const metadata = {
  title: 'SSGPT6 Game',
  description: 'Root governance console online',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
