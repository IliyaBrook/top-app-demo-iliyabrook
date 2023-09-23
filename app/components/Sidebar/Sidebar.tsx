'use client';
import React, {ReactElement, useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {SidebarProps} from "@/app/components/Sidebar/Sidebar.props";
import {SideBarContext} from "@/app/contexts";
import {getMnu} from "@/api/menu";
import {firstLevelMenu} from "@/app/components/Sidebar/data";
import styles from "@/app/components/Sidebar/Sidebar.module.scss";
import classNames from "classnames";
import Link from "next/link";
import {BuildFirstLevel} from "@/app/components/Sidebar/components/BuildFirstLevel";
import {MenuItem} from "@/interfaces/menu.interface";
import classnames from "classnames";
import { motion } from 'framer-motion';


export const Sidebar = (props: SidebarProps): ReactElement => {
    const [routeData, setRouteData] = useState<MenuItem[]>([]);
    const {className} = props;

    const pathname = usePathname();

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" }
    };

    useEffect(() => {
        if (pathname) {
            const currentCategoryData = firstLevelMenu.find(m => m.route === pathname.split('/')[1]);
            if (currentCategoryData) {
                getMnu(currentCategoryData.id)
                    .then(itemsRes => {
                        if (itemsRes?.length > 0) {
                            return itemsRes;
                        }
                    })
                    .then(itemsRes => {
                        if (itemsRes) {
                            setRouteData(itemsRes);
                        }
                    });
            }

        }
    }, [pathname]);

    return (
        <div className={classnames([className, styles.sideBarWrapper])}>
            <SideBarContext.Provider value={{routeData, setRouteData}}>
                <nav role='navigation'>
                    <ul className={styles.firstLevelList}>
                        {firstLevelMenu.map(m => (
                            <li
                                key={m.route}
                                className={classNames([
                                    styles.sideBarLi,
                                    {[styles.firstLevelActive]: pathname === `/${m.route}`},
                                    {[styles.firstLevelInactive]: pathname !== `/${m.route}`},
                                ])}
                            >
                                <Link href={`/${m.route}`}>
                                    {m.icon}
                                    <span>{m.name}</span>
                                </Link>
                                {`/${m.route}` === pathname && (
                                    <React.Suspense>
                                        <motion.div
                                            initial="closed"
                                            animate="open"
                                            exit="closed"
                                            variants={variants}
                                        >
                                            <BuildFirstLevel
                                                menuData={m}
                                                pathname={pathname}
                                                secondLevelItems={routeData}
                                            />
                                        </motion.div>
                                    </React.Suspense>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </SideBarContext.Provider>
        </div>
    );
};
