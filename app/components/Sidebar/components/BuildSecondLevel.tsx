import {FirstLevelMenuItem, MenuItem} from "@/interfaces/menu.interface";
import {ReactElement, useLayoutEffect, useState} from "react";
import {getMnu} from "@/api/menu";
import styles from '../Sidebar.module.scss';
import classnames from "classnames";
import {motion} from 'framer-motion';
import {BuildThirdLevel} from "@/app/components/Sidebar/components/BuildThirdLevel";
import {NavCollapseItem} from "@/app/components/Sidebar/components/NavCollapseItem";

interface buildSecondLevelInterface {
    secondLevelItems: MenuItem[],
    pathname: string,
    menuData: FirstLevelMenuItem
}

export const BuildSecondLevel = ({secondLevelItems, pathname, menuData}: buildSecondLevelInterface): ReactElement => {

    return (
        <motion.ul
            layout
            transition={{duration: 0.5}}
            className={styles.secondBlock}
        >
            {secondLevelItems.map((m) => {
                return (
                    <motion.li
                        key={m._id.secondCategory}
                    >
                        <motion.div
                            whileHover={{scale: 1.03}}

                        >
                            <NavCollapseItem
                                title={m._id.secondCategory}
                                activeClassName={styles.secondLevelActive}
                                classNames={[styles.secondLevel]}
                                level={2}
                                item={m}
                            >
                                {/*<BuildThirdLevel*/}

                                {/* isOpened={m.isOpened}/>*/}
                                {/*<pre>*/}
                                {/*    {JSON.stringify(m, null, 2)}*/}
                                {/*</pre>*/}
                                {m.pages.map(p => (
                                    <NavCollapseItem
                                        key={p._id}
                                        title={p.category}
                                        activeClassName={styles.secondLevelActive}
                                    />
                                ))}
                            </NavCollapseItem>

                        </motion.div>
                        <div
                            className={styles.secondLevelBlockOpen}
                        >
                            {/*<BuildThirdLevel*/}
                            {/*    pages={m.pages}*/}
                            {/*    route={false}*/}
                            {/*    isOpened={isOpen}*/}
                            {/*    pathname={pathname}*/}
                            {/*/>*/}
                        </div>
                    </motion.li>
                );
            })}
        </motion.ul>
    );
};
