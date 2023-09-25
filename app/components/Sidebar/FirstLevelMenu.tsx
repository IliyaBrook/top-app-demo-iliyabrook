import React from "react";
import styles from './Sidebar.module.scss';
import classNames from "classnames";
import Link from "next/link";
import {FirstLevelMenuProps} from "@/app/components/Sidebar/Sidebar.props";
import {BuildSecondLevel} from "@/app/components/Sidebar/componentsOld/BuildSecondLevel";
import {SecondLevelMenu} from "@/app/components/Sidebar/SecondLevelMenu";
import {motion} from 'framer-motion';

export const FirstLevelMenu = ({pagesMenuData, pages, icon, route, name, pathname}: FirstLevelMenuProps) => {

    const menuPathName = pathname.split('/')[1];

    return (
        <li
            key={`first_level_key_${pages}`}
            className={classNames([
                styles.firstLevelList,
                {[styles.firstLevelActive]: menuPathName === route},
                {[styles.firstLevelInactive]: menuPathName !== route}
            ])}
        >

            <div className={styles.firstLevelWrapper}>


                <span className={styles.firstLevelName}>
                    {icon as React.ReactNode}
                    <Link href={`/${pages}`} className={styles.firstLevelLink}/>
                    {name}
                </span>
                <SecondLevelMenu
                    secondLevelData={pagesMenuData}
                    pathname={pathname}
                    isOpened={menuPathName === route}
                />
            </div>
        </li>
    );
};
