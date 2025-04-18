import { Inter } from "next/font/google";
import './globals.css';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Add this line to include Roboto and Poppins fonts
const poppins = "https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Poppins:wght@400&display=swap";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href={poppins} rel="stylesheet" /> {/* Link to Google Fonts */}
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
