import type {Metadata} from "next";
import "./globals.css";
import {inter} from './fonts';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";


export const metadata: Metadata = {
    title: "Black Hills Defense & Industry Symposium",
    description: "Leading The National Defense Discussion",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="overflow-x-hidden">
        <body className={`${inter.className} overflow-x-hidden`}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
