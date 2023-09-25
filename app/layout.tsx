import './globals.scss';
import {Open_Sans} from 'next/font/google';
import React from "react";
import classnames from "classnames";
import {Header} from "@/app/components/Header/Header";
import {Sidebar} from "@/app/components/Sidebar/Sidebar";
import {Footer} from "@/app/components/Footer/Footer";
import styles from './layout.module.scss';
import {Metadata} from "next";
import {firstLevelMenu} from "@/app/components/Sidebar/data";
import {getMenu} from "@/api/menu";
import {MenuData} from "@/app/components/Sidebar/Sidebar.props";

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
    const firstLevelMenuData = await Promise.allSettled(firstLevelMenu.map(async (menu) => {
        const menuId = menu.id;
        const pagesMenuData = await getMenu(menuId);
        return {
            params: {pages: menu.route, pagesMenuData},
        };
    }));

    const filteredMenuData: MenuData[] = firstLevelMenuData
        .filter((result): result is PromiseFulfilledResult<any> => result.status === 'fulfilled')
        .map(result => {
            const elementData = firstLevelMenu.find(item => item.route === result.value.params.pages);
            return {
                ...result.value,
                elementData
            }
        });

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
            <Sidebar
                className={styles.sidebar}
                menuData={filteredMenuData}
            />
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer}/>
        </div>
        </body>
        </html>
    );
}
