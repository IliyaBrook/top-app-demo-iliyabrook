import {PageItem} from "@/interfaces/menu.interface";
import React, {ReactElement} from "react";
import styles from '../Sidebar.module.scss';
import classnames from "classnames";
import {motion, useReducedMotion} from 'framer-motion';
import Link from "next/link";

export const BuildThirdLevel = ({pages, route, isOpened = false, pathname}: {
    pages: PageItem[],
    route: string,
    isOpened: boolean,
    pathname: string
}): ReactElement => {

    return (
        <>
            {pages.map(p => (
                <motion.div
                    key={p._id}
                >
                    <Link href={`/${route}/${p.alias}`}>
                        <div
                            tabIndex={isOpened ? 0 : -1}
                            className={classnames(styles.thirdLevel, {
                                [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname
                            })}
                            aria-current={`/${route}/${p.alias}` === pathname ? 'page' : false}
                        >
                            {isOpened && p.category}
                        </div>
                    </Link>
                </motion.div>
            ))}
        </>
    );
};
