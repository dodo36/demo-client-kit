import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "./components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    metadataBase: new URL('https://demo-client-kit.vercel.app'),
    title: {
        default: "Premium Client Demo",
        template: "%s | Agency Name"
    },
    description: "High-conversion landing page demo kit.",
    openGraph: {
        title: "Premium Client Demo",
        description: "High-conversion landing page demo kit.",
        url: 'https://demo-client-kit.vercel.app',
        siteName: 'Agency Name',
        images: [
            {
                url: '/og.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'Agency Name',
        card: 'summary_large_image',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
