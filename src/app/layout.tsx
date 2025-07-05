import Link from "next/link"; // Import Link for navigation
// app/layout.tsx
import type { Metadata } from "next";
// Import your global CSS file. If you chose 'src' directory, it would be '@/src/app/globals.css'
import "./globals.css";
import Script from "next/script"; // Import the Script component for external scripts like GA
import Navbar from "@/components/ui/Navbar"; // Import the Navbar component

// You can define metadata for your site here (for SEO)
export const metadata: Metadata = {
  title: "Moonsellers - Your Gateway to Bengaluru's Blooming Future",
  description:
    "Invest in prime land parcels in Bengaluru's rapidly growing outskirts. Secure your future with Moonsellers' meticulously planned estates, featuring plantation initiatives and flexible ownership.",
  keywords:
    "Moonsellers, Bangalore land, investment, real estate, plots, property, Bengaluru outskirts, NRI investment, land for sale Karnataka",
  // You can add more meta tags here for social media, etc.
  openGraph: {
    title: "Moonsellers - Your Gateway to Bengaluru's Blooming Future",
    description:
      "Invest in prime land parcels in Bengaluru's rapidly growing outskirts. Secure your future with Moonsellers.",
    url: "https://www.moonsellers.com", // Replace with your actual domain
    siteName: "Moonsellers",
    images: [
      {
        url: "https://www.moonsellers.com/images/moonsellers-og-image.jpg", // Replace with a good social sharing image
        width: 1200,
        height: 630,
        alt: "Moonsellers Property Investments",
      },
    ],
    locale: "en_IN", // Assuming India
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonsellers - Your Gateway to Bengaluru's Blooming Future",
    description:
      "Invest in prime land parcels in Bengaluru's rapidly growing outskirts. Secure your future with Moonsellers.",
    creator: "@YourTwitterHandle", // Replace if you have one
    images: [
      "https://www.moonsellers.com/images/moonsellers-twitter-image.jpg",
    ], // Replace with a good Twitter image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-base-100 text-base-content">
        <Navbar /> {/* Add the Navbar component here */}
        {/* Your shared Header component could go here, if you have one */}
        {/* For a very simple v0, you might integrate minimal header directly into page.tsx */}
        {children} {/* This is where your page.tsx content will be rendered */}
        {/* Your shared Footer component could go here */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} Moonsellers. All rights
              reserved.
            </p>
            <div className="mt-4 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:underline mx-2">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:underline mx-2">
                Terms of Service
              </Link>
            </div>
            <p className="mt-2 text-gray-500 text-xs">
              Developed with ❤️ by Moonsellers Tech Team
            </p>
          </div>
        </footer>
        {/* Google Analytics Script */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive" // Loads after the page is interactive
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
