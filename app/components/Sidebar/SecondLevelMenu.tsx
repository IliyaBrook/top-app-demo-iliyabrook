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
    const controls = useAnimation();
    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" }
    };
    // const variants = {
    //     open: { opacity: 1, x: 0, scale: 1, rotate: 0 },
    //     closed: { opacity: 0, x: "-100%", scale: 0.8, rotate: 90 }
    // };

    useEffect(() => {
        if (isOpened) {
            controls.start({opacity: 1, y: 0});
        } else {
            controls.start({opacity: 0, y: 100});
        }
    }, [isOpened]);

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
                        layout
                        key={`second_level_key_${_id.secondCategory}`}
                        initial="closed"
                        animate={controls}
                        exit="closed"
                        variants={variants}
                        transition={{ delay: idx/2 * 0.1 }}
                    >
                        <motion.div>
                            <ThirdLevelMenu
                                pages={pages}
                                _id={_id}
                                isOpened={isOpened}
                            />
                        </motion.div>
                    </motion.li>
                );
            })}
        </motion.ul>
    );

};
