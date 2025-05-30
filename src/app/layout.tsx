// src/app/layout.tsx
import './globals.css'
import type { Metadata } from "next";
import { ReactNode } from 'react'



export const metadata: Metadata = {
  title: 'Sandesh Poudel | Portfolio',
  description: 'Personal website of Sandesh Poudel - Software Engineer',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-dark-bg text-dark-text font-sans antialiased">
      <div id="modal-root"></div>
        <main className="min-h-screen">
          
          {children}
        </main>
      </body>
    </html>
  )
}
