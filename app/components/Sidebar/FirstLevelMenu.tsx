import {FirstLevelMenuItem, MenuItem} from "@/interfaces/menu.interface";
import React, {ReactElement, useContext, useRef} from "react";
import styles from './Sidebar.module.scss';
import classNames from "classnames";
import Link from "next/link";
import {getActivePath} from "@/app/utils/serverSideUtils";

interface buildSecondLevelInterface {
    secondLevelItems: MenuItem[],
    pathname: string,
    menuData: FirstLevelMenuItem,
    isOpen?: boolean
}

export const FirstLevelMenu = ({menuData}) => {
    // const router = useRouter();

    const activePath = getActivePath();
    const route = menuData.route;
    console.log('active path: ', activePath)
    console.log('active path route: ', route)

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" }
    };
// replace prefetch
    const currentPath = getActivePath();
    return (
        <li

            className={classNames([
                styles.sideBarLi,
                {[styles.firstLevelActive]: activePath === route},
                {[styles.firstLevelInactive]: activePath !== route}
            ])}
        >

            <Link
                prefetch
                key={currentPath}
                href={`/${menuData.route}`}

            >
                {menuData.icon}
                <span>{menuData.name}</span>
            </Link>
            {/*{`/${route}` === activePath && (*/}
            {/*    <React.Suspense>*/}
            {/*        <motion.div*/}
            {/*            initial="closed"*/}
            {/*            animate="open"*/}
            {/*            exit="closed"*/}
            {/*            variants={variants}*/}
            {/*            transition={{ delay: index * 0.2 }}*/}
            {/*        >*/}
            {/*            <BuildFirstLevel*/}
            {/*                menuData={menuData}*/}
            {/*                pathname={activePath}*/}
            {/*                secondLevelItems={menuData}*/}
            {/*            />*/}
            {/*        </motion.div>*/}
            {/*    </React.Suspense>*/}
            {/*)}*/}
        </li>
    );
};
