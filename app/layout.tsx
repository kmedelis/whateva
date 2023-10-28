"use client"
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './globals.css'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google';

const roboto = Roboto({subsets: ['latin'], weight:'300'})

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Roboto',
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
       <ThemeProvider theme={theme}>
       <body style={roboto.style}>{children}</body>
       </ThemeProvider>
    </html>
  );
}