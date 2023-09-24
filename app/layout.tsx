import './globals.scss';
import {Open_Sans} from 'next/font/google';
import React from "react";
import classnames from "classnames";
import {Header} from "@/app/components/Header/Header";
import {Sidebar} from "@/app/components/Sidebar/Sidebar";
import {Footer} from "@/app/components/Footer/Footer";
import styles from './layout.module.scss';
import {Metadata} from "next";
import {firstLevelMenu} from "@/api/data";
import {getMnu} from "@/api/menu";
const openSans = Open_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700']
});

export const metadata: Metadata = {
  title: 'Next js react course',
  description: 'This is project for learning Next.js'
};


export default async function RootLayout({children}: {
    children: React.ReactNode
}) {
    const firstLevelMenuData =  await Promise.allSettled(firstLevelMenu.map( async (menu) => {
        const menuId = menu.id;
        const coursesMenuData = await getMnu(menuId);
        return {
            params: {courses: menu.route, coursesMenuData},
        };
    }))

    return (
        <html lang="en">
        <body
            className={classnames([
                openSans.className
            ])}
        >
            <div className={styles.wrapper}>
                <Header
                    className={styles.header}
                    text="Header num 1"
                />
                <Sidebar className={styles.sidebar} menuData={firstLevelMenuData}/>
                <div className={styles.body}>
                    {children}
                </div>
                <Footer className={styles.footer}/>
            </div>
        </body>
        </html>
    );
}
