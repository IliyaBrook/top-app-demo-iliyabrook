import React, {useEffect} from "react";
import styles from './Sidebar.module.scss';
import classNames from "classnames";
import Link from "next/link";
import {motion, useAnimation, useAnimate } from 'framer-motion';
import {SecondLevelProps} from "@/app/components/Sidebar/Sidebar.props";
import classnames from "classnames";
import {ThirdLevelMenu} from "@/app/components/Sidebar/ThirdLevelMenu";
import {usePathname} from "next/navigation";

export const SecondLevelMenu = ({secondLevelData, pathname, isOpened}: SecondLevelProps) => {

    return (
        <motion.ul
            className={classnames([
                styles.secondWrapper,
                {[styles.borderActiveLevel]: isOpened}
            ])}
        >
            {secondLevelData.map((secondLevelItem, idx) => {
                const {_id, pages} = secondLevelItem;
                return (
                    <motion.li
                        key={`second_level_key_${_id.secondCategory}`}
                    >
                        <motion.div>
                            <ThirdLevelMenu
                                pages={pages}
                                _id={_id}
                                isOpened={isOpened}
                                pathname={pathname}
                                index={idx}
                            />
                        </motion.div>
                    </motion.li>
                );
            })}
        </motion.ul>
    );

};
