import React, { ReactNode } from 'react';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-black dark:text-white min-h-screen">
        {children}
      </body>
    </html>
  );
} 