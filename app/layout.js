import Script from "next/script";
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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-553XFKSX');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={`${metropolis.variable} antialiased`} suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-553XFKSX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
