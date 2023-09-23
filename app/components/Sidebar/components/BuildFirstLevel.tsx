import {FirstLevelMenuItem, MenuItem} from "@/interfaces/menu.interface";
import {ReactElement, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import {getMnu} from "@/api/menu";
import styles from '../Sidebar.module.scss';
import classnames from "classnames";
import {motion, AnimatePresence} from 'framer-motion';
import {BuildThirdLevel} from "@/app/components/Sidebar/components/BuildThirdLevel";
import {NavCollapseItem} from "@/app/components/Sidebar/components/NavCollapseItem";
import classNames from "classnames";
import {SideBarContext} from "@/app/contexts";

interface buildSecondLevelInterface {
    secondLevelItems: MenuItem[],
    pathname: string,
    menuData: FirstLevelMenuItem,
    isOpen?: boolean
}
// .borderActiveLevel
export const BuildFirstLevel = ({secondLevelItems, pathname, menuData}: buildSecondLevelInterface): ReactElement => {
    const activeLevelElemRef = useRef(null);
    const context = useContext(SideBarContext);
    const isOpen = context?.routeData.some(item => item.isOpened);

    return (
        <motion.ul
            className={classnames([
                styles.secondWrapper,
                {[styles.borderActiveLevel]: !isOpen}
            ])}
        >
            {secondLevelItems.map((m, idx) => {
                return (
                    <motion.li

                        key={`second_level_key_${idx}`}
                    >
                        <motion.div>
                            <NavCollapseItem
                                key={`second_level_key_collapse_${idx}`}
                                title={m._id.secondCategory}
                                activeClassName={styles.secondLevelActive}
                                classNames={[styles.secondLevel]}
                                level={2}
                                item={m}
                            >
                                {m.pages.map(p => (
                                    <div
                                        ref={activeLevelElemRef}
                                        key={`third_level_collapse_key_${p._id}`}
                                        className={classnames([
                                            styles.thirdLevelWrapper
                                        ])}
                                    >
                                        <NavCollapseItem
                                            title={p.category}
                                            activeClassName={styles.thirdLevelActive}
                                            classNames={[styles.thirdLevel]}
                                            level={3}
                                            item={p}
                                        />
                                    </div>
                                ))}
                            </NavCollapseItem>
                        </motion.div>
                    </motion.li>
                );
            })}
        </motion.ul>
    );
};
