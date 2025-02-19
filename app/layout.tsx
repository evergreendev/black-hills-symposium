import type {Metadata} from "next";
import "./globals.css";
import {inter} from './fonts';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google"


export const metadata: Metadata = {
    title: "Black Hills Defense & Industry Symposium – Presented by Northrop Grumman",
    description: "Leading The National Defense Discussion",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="overflow-x-hidden">
        <GoogleAnalytics gaId={"G-0C5VGMKCLG"}/>
        <body className={`${inter.className} overflow-x-hidden text-white`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
