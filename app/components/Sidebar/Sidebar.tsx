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
import {BuildSecondLevel} from "@/app/components/Sidebar/components/BuildSecondLevel";
import {MenuItem} from "@/interfaces/menu.interface";


export const Sidebar = (props: SidebarProps): ReactElement => {
    const [routeData, setRouteData] = useState<MenuItem[]>([]);
    const {className} = props;

    const pathname = usePathname();

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
        <div className={className}>
            <SideBarContext.Provider value={{routeData, setRouteData}}>
                <nav role='navigation'>
                    <ul className={styles.firstLevelList}>
                        {firstLevelMenu.map(m => (
                            <li
                                key={m.route}
                                className={classNames([
                                    styles.SidebarTest,
                                    {[styles.active]: pathname === `/${m.route}`},
                                    {[styles.inactive]: pathname !== `/${m.route}`},
                                ])}
                            >
                                <Link href={`/${m.route}`}>
                                    <div className={classNames(styles.firstLevel, {
                                        [styles.firstLevelActive]: `/${m.route}` === pathname
                                    })}>
                                        {m.icon}
                                        <span>{m.name}</span>
                                    </div>
                                </Link>
                                {`/${m.route}` === pathname && (
                                    (
                                        <div className={styles.secondLevelActive}>
                                            <BuildSecondLevel
                                                menuData={m}
                                                pathname={pathname}
                                                secondLevelItems={routeData}
                                            />
                                        </div>
                                    )
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </SideBarContext.Provider>
        </div>
    );
};
