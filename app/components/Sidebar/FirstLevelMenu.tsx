import React from "react";
import styles from './Sidebar.module.scss';
import classNames from "classnames";
import Link from "next/link";
import { FirstLevelMenuProps } from "@/app/components/Sidebar/Sidebar.props";
export const FirstLevelMenu = ({coursesMenuData, courses, icon, route, name}: FirstLevelMenuProps) => {

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" }
    };

    return (
        <li

            className={classNames([
                styles.sideBarLi,
                // {[styles.firstLevelActive]: activePath === route},
                // {[styles.firstLevelInactive]: activePath !== route}
            ])}
        >
            {/*{*/}
            {/*    firstLevelMenu.map(({icon, name, id, route}) => {*/}
            {/*        return (*/}
            {/*            <Link*/}
            {/*                href={`/${courses}`}*/}
            {/*            >*/}
            {/*                {icon}*/}
            {/*                <span>{name}</span>*/}
            {/*            </Link>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}

            <Link
                href={`/${courses}`}
            >
                {icon as React.ReactNode}
                <span>{name}</span>
            </Link>

            {/*{`/${route}` === activePath && (*/}
            {/*    <React.Suspense>*/}

            {/*    </React.Suspense>*/}
            {/*)}*/}
        </li>
    );
};
