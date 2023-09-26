import React, {useEffect, useState} from "react";
import {ThirdLevelProps} from "@/app/components/Sidebar/Sidebar.props";
import {motion, useAnimation} from "framer-motion";
import {FourthLevelMenu} from "@/app/components/Sidebar/FourthLevelMenu";
import styles from './Sidebar.module.scss'
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

import classnames from "classnames";
import {tr} from "date-fns/locale";


export const ThirdLevelMenu = ({pages, _id, isOpened, index, setShowSecondLevelBorder}: ThirdLevelProps) => {
    const [secondLevelOpen, setSecondLevelOpen] = useState(false);
    const variants = {
        open: {opacity: 1, y: 0},
        closed: {opacity: 0, y: "-100%"}
    };
    const {secondCategory} = _id;

    const pathname = usePathname();
    const router = useRouter();
    const firstPartOfPath = pathname.split('/')[1];

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
            transition={{delay: index / 2 * 0.1}}
        >
                 <motion.div
                     whileHover={{scale: 1.03}}
                     whileTap={{scale: 0.95}}
                     className={styles.secondLevelName}
                     onClick={() => {
                         setSecondLevelOpen(!secondLevelOpen);
                         if (secondLevelOpen) {
                             setShowSecondLevelBorder(true);
                         }else {
                             router.push(`/${firstPartOfPath}`);
                             setShowSecondLevelBorder(false);
                         }
                     }}
                 >
                    {secondCategory}
                 </motion.div>
            {pages.map((thirdLevelItem) => {

                const {_id, category, title, alias} = thirdLevelItem;
                return (
                    <div
                        key={`third_level_key_${_id}`}
                        className={styles.thirdLevelWrapper}
                    >
                        <motion.div
                            className={styles.fourthLevelWrapper}
                            onClick={ () => { router.push(`/${firstPartOfPath}/${alias}`)}}
                            whileHover={{scale: 1.03}}
                            whileTap={{scale: 0.95}}
                        >
                            <FourthLevelMenu
                                _id={_id}
                                category={category}
                                title={title}
                                alias={alias}
                                secondLevelOpened={secondLevelOpen}
                            />
                        </motion.div>
                    </div>
                )
            })}
        </motion.div>
    )
};
