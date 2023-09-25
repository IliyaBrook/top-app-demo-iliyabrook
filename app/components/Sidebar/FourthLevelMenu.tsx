import React from "react";
import {motion} from "framer-motion";
import {SideBarPage} from "@/app/components/Sidebar/Sidebar.props";
import styles from './Sidebar.module.scss';

export const FourthLevelMenu = ({_id, category, title, alias, pathname, secondLevelOpened}: SideBarPage) => {


    return (
        <>

            {secondLevelOpened && (
                <motion.div
                    className={styles.pageLinkWrapper}
                >
                    {title}
                </motion.div>
            )}
        </>
    );
};
