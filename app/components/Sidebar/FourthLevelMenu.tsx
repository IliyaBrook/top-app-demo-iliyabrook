import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {SideBarPage} from "@/app/components/Sidebar/Sidebar.props";
import styles from './Sidebar.module.scss';
import {getPage} from "@/api/page";
import {usePathname} from "next/navigation";

interface PageData {
    alias: string;
    category: string;
}

export const FourthLevelMenu = ({_id, category, title, alias, secondLevelOpened}: SideBarPage) => {

    const pathname = usePathname();

    const [pages, setPages] =  useState<PageData | null>(null);
    useEffect(() => {
        getPage(alias).then((data: PageData | null) => {
            if (data) {
                console.log('FourthLevelMenu data 22: ', data)
                setPages({
                    alias: data.alias,
                    category: data.category
                });
            }
        });
    }, []);

    console.log('FourthLevelMenu pages: ', pages)

    console.log('FourthLevelMenu pathname: ', pathname)

    const isCurrentPage = pathname.includes(alias);

    return (
        <>
            {secondLevelOpened  && (
                <div
                    className={styles.thirdLevelWrapper}
                >
                    <div className={styles.thirdLevelTitle}>
                        {title}
                    </div>
                    {/*<motion.div>*/}
                    {/*    <Link href={`/${pathname}/${alias}`}*/}
                    {/*          className={styles.pageLink}*/}
                    {/*    />*/}
                    {/*    {pages?.category}*/}
                    {/*</motion.div>*/}
                    {isCurrentPage && pages && (
                        <div
                            className={styles.pageLink}
                        >
                            {pages.category}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};
