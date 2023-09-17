import {FirstLevelMenuItem, MenuItem} from "@/interfaces/menu.interface";
import {ReactElement, useLayoutEffect, useState} from "react";
import {getMnu} from "@/api/menu";
import styles from './BuildLevels.module.scss';
import classnames from "classnames";
import { motion } from 'framer-motion';
import {BuildThirdLevel} from "@/app/components/Sidebar/components/buildLevels/BuildThirdLevel";

export const BuildSecondLevel = ({pathname, menuData}: {pathname: string, menuData: FirstLevelMenuItem}): ReactElement => {
    const [secondLevelItems, setSecondLevelItems] = useState<MenuItem[]>([]);

    useLayoutEffect(() => {
        getMnu(menuData.id)
            .then(itemsRes => {
                if (itemsRes?.length > 0) {
                    setSecondLevelItems(itemsRes);
                }
            });
    }, [menuData.id]);


    return (
        <motion.ul
            layout
            transition={{ duration: 0.5 }}
            className={styles.secondBlock}
        >
            {secondLevelItems.map((m) => {
                if (m.pages.map(p => p.alias).includes(pathname.split('/')[2])) {
                    m.isOpened = true;
                }
                return (
                    <motion.li
                        key={m._id.secondCategory}
                        onClick={() => {
                            setSecondLevelItems(prev => prev.map(item => {
                                return {
                                    ...item,
                                    isOpened: item._id.secondCategory === m._id.secondCategory ? !item.isOpened : false
                                };
                            }));
                        }}
                    >
                        <motion.div
                            whileHover={{scale: 1.03}}
                            className={classnames([
                                styles.secondLevel,
                                {[styles.secondLevelActive]: m.isOpened}
                            ])}
                        >
                            {m._id.secondCategory}
                        </motion.div>
                        <div
                            className={styles.secondLevelBlockOpen}
                        >
                            <BuildThirdLevel
                                pages={m.pages}
                                route={menuData.route}
                                isOpened={m.isOpened ?? false}
                                pathname={pathname}
                            />
                        </div>
                    </motion.li>
                );
            })}
        </motion.ul>
    );
};
