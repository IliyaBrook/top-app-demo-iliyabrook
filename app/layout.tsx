import './globals.scss'
import {Inter, Open_Sans} from 'next/font/google'
import React from "react";
import classnames from "classnames";


const inter = Inter({subsets: ['latin']})
const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700']
})

// export const metadata: Metadata = {
//   title: 'Next js react course',
//   description: 'This is project for learning Next.js'
// }


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body
            className={classnames([
                openSans.className
            ])}
        >
        {children}
        </body>
        </html>
    )
}
