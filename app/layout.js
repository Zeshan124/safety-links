import localFont from "next/font/local";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export const metadata = {
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

// Only the 3 weights actually used across the site — cuts font payload from ~436 KB to ~145 KB
const metropolis = localFont({
  src: [
    { path: "../public/fonts/metropolis/Metropolis-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/metropolis/Metropolis-SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/metropolis/Metropolis-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-metropolis",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${metropolis.variable} antialiased`} suppressHydrationWarning>
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
