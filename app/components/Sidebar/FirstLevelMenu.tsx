import React from "react";
import styles from './Sidebar.module.scss';
import classNames from "classnames";
import Link from "next/link";
import { FirstLevelMenuProps } from "@/app/components/Sidebar/Sidebar.props";
import {BuildSecondLevel} from "@/app/components/Sidebar/componentsOld/BuildSecondLevel";
import {SecondLevelMenu} from "@/app/components/Sidebar/SecondLevelMenu";
import { motion } from 'framer-motion';

export const FirstLevelMenu = ({pagesMenuData, pages, icon, route, name, pathname}: FirstLevelMenuProps) => {

    const menuPathName = pathname.split('/')[1];

    return (
        <li
            className={classNames([
                styles.sideBarLi,
                {[styles.firstLevelActive]: menuPathName === route},
                {[styles.firstLevelInactive]: menuPathName !== route}
            ])}
        >
            <Link
                href={`/${pages}`}
            >
                {icon as React.ReactNode}
                <span>{name}</span>
                <SecondLevelMenu
                    secondLevelData={pagesMenuData}
                    pathname={pathname}
                    isOpened={menuPathName === route}
                />
            </Link>
        </li>
    );
};
