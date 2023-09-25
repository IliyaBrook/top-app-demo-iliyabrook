import React, {useEffect} from "react";
import {ThirdLevelProps} from "@/app/components/Sidebar/Sidebar.props";
import {motion, useAnimation} from "framer-motion";
import {FourthLevelMenu} from "@/app/components/Sidebar/FourthLevelMenu";
import styles from './Sidebar.module.scss'

export const ThirdLevelMenu = ({pages, _id, isOpened, pathname, index}: ThirdLevelProps) => {
    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" }
    };
    const {secondCategory} = _id;

    const controls = useAnimation();
    useEffect(() => {
        if (isOpened) {
            controls.start({opacity: 1, y: 0});
        } else {
            controls.start({opacity: 0, y: 100});
        }
    }, [isOpened]);

    return isOpened && (
        <motion.div
            initial="closed"
            animate={controls}
            exit="closed"
            variants={variants}
            transition={{ delay: index/2 * 0.1 }}
        >
            <span className={styles.secondLevelName}>
                {secondCategory}
            </span>
            {pages.map((thirdLevelItem) => {
                const {_id, category, title, alias} = thirdLevelItem;
                return (
                    <div key={`third_level_key_${_id}`}>
                        <FourthLevelMenu
                            _id={_id}
                            category={category}
                            title={title}
                            alias={alias}
                            pathname={pathname}
                        />
                    </div>
                )
            })}
        </motion.div>
    )
};
