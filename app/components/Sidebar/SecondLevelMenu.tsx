import React, {useState} from "react";
import styles from './Sidebar.module.scss';
import {motion } from 'framer-motion';
import {SecondLevelProps} from "@/app/components/Sidebar/Sidebar.props";
import classnames from "classnames";
import {ThirdLevelMenu} from "@/app/components/Sidebar/ThirdLevelMenu";


export const SecondLevelMenu = ({secondLevelData, pathname, isOpened}: SecondLevelProps) => {

    const [showSecondLevelBorder, setShowSecondLevelBorder] = useState(isOpened);

    return (
        <motion.ul
            className={classnames([
                styles.secondWrapper,
                {[styles.borderActiveLevel]: showSecondLevelBorder}
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
                                setShowSecondLevelBorder={setShowSecondLevelBorder}
                                index={idx}
                            />
                        </motion.div>
                    </motion.li>
                );
            })}
        </motion.ul>
    );

};
