'use client';
import React, {ReactElement} from "react";
import {usePathname} from "next/navigation";
import {SideBarProps} from "@/app/components/Sidebar/Sidebar.props";
import styles from "@/app/components/Sidebar/Sidebar.module.scss";
import classnames from "classnames";
import {FirstLevelMenu} from "@/app/components/Sidebar/FirstLevelMenu";



export const Sidebar = ({className, menuData}: SideBarProps): ReactElement => {
    const pathname = usePathname();
    return (
        <div className={classnames([className, styles.sideBarWrapper])}>
            <nav role='navigation'>
                <ul className={styles.firstLevelList}>
                    {menuData.map((m, index) => {
                        const { elementData, params } = m;
                        const firstLevelMenuData = {
                            ...elementData,
                            ...params,
                            pathname
                        }
                        return (
                            (
                                <FirstLevelMenu
                                    {...firstLevelMenuData}
                                    key={`first_level_${index}`}
                                />
                            )
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
};
