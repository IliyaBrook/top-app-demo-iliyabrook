'use client';
import React, {ReactElement, useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {SidebarProps} from "@/app/components/Sidebar/Sidebar.props";
import {SideBarContext} from "@/app/contexts";
import {getMnu} from "@/api/menu";
import styles from "@/app/components/Sidebar/Sidebar.module.scss";
import classNames from "classnames";
import Link from "next/link";
import {MenuItem} from "@/interfaces/menu.interface";
import classnames from "classnames";
import {FirstLevelMenu} from "@/app/components/Sidebar/FirstLevelMenu";


// const getMenuData  = async (props) => {
//     console.log('Sidebar props 5555: ', props)
//     return await Promise.allSettled(firstLevelMenu.map( async (menu) => {
//         const menuId = menu.id;
//         const coursesMenuData = await getMnu(menuId);
//         return {
//             params: {courses: menu.route, coursesMenuData},
//         };
//     }))
// }



export const Sidebar = (props: SidebarProps): ReactElement => {
    const menuData =
    console.log('Sidebar props: ', props)
    const {className} = props;

    const pathname = usePathname();

    // useEffect(() => {
    //     if (pathname) {
    //         const currentCategoryData = firstLevelMenu.find(m => m.route === pathname.split('/')[1]);
    //         if (currentCategoryData) {
    //             getMnu(currentCategoryData.id)
    //                 .then(itemsRes => {
    //                     if (itemsRes?.length > 0) {
    //                         return itemsRes;
    //                     }
    //                 })
    //                 .then(itemsRes => {
    //                     if (itemsRes) {
    //                         setRouteData(itemsRes);
    //                     }
    //                 });
    //         }
    //
    //     }
    // }, [pathname]);

    return (
        <div className={classnames([className, styles.sideBarWrapper])}>
            <nav role='navigation'>
                <ul className={styles.firstLevelList}>
                    {/*{firstLevelMenu.map((m, index) => (*/}
                    {/*    <FirstLevelMenu menuData={m} key={`first_level_${index}`}/>*/}
                    {/*))}*/}
                </ul>
            </nav>
        </div>
    );
};
