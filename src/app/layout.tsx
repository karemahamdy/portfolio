import React from 'react'
import type { Metadata } from 'next'
// import { Raleway } from 'next/font/google'

import './globals.css'

// const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karema - Frontend Software Engineer',
  description: 'Personal portfolio of Karema, a Frontend Software Engineer specializing in React and Next.js',
  openGraph: {
    title: 'Karema - Frontend Software Engineer',
    description: 'Personal portfolio of Karema, a Frontend Software Engineer',
    images: [{ url: '/husam.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karema - Frontend Software Engineer',
    description: 'Personal portfolio of Karema, a Frontend Software Engineer',
    images: ['/karema.jpg'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={raleway.className}
      >
        {children}
      </body>
    </html>
  );
}
