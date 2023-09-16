import {PageItem} from "@/interfaces/menu.interface";
import React, {ReactElement} from "react";
import styles from './BuildLevels.module.scss';
import classnames from "classnames";
import {motion, useReducedMotion} from 'framer-motion';
import Link from "next/link";

export const BuildThirdLevel = ({pages, route, isOpened, pathname}: {
    pages: PageItem[],
    route: string,
    isOpened: boolean,
    pathname: string
}): ReactElement => {

    const shouldReduceMotion = useReducedMotion();

    const variantsChildren = {
        visible: {
            opacity: 1,
            height: 29
        },
        hidden: {opacity: shouldReduceMotion ? 1 : 0, height: 0}
    };

    return (
        <>
            {pages.map(p => (
                <motion.div
                    key={p._id} variants={variantsChildren}
                >
                    <Link href={`/${route}/${p.alias}`}>
                        <div
                            tabIndex={isOpened ? 0 : -1}
                            className={classnames(styles.thirdLevel, {
                                [styles.thirdLevelActive]: `/${route}/${p.alias}` == pathname
                            })}
                            aria-current={`/${route}/${p.alias}` === pathname ? 'page' : false}
                        >
                            <div>
                                {isOpened && p.category}
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </>
    );
};
