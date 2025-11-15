import './globals.css'
import { Inter, IBM_Plex_Mono } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono'
})

export const metadata = {
  title: 'Create values.yaml',
  description: 'Create configuration for camunda platform helm chart',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
