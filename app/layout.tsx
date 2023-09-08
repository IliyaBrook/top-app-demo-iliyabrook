import {Open_Sans} from 'next/font/google';
import React from "react";
import classNames from "classnames";


const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700']
});

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={classNames([openSans.className])}>
                {children}
            </body>
        </html>
    );
}
