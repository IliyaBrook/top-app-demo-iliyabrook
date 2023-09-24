import React from "react";
import {ThirdLevelProps} from "@/app/components/Sidebar/Sidebar.props";
import {motion} from "framer-motion";

export const ThirdLevelMenu = ({pages, _id, isOpened}: ThirdLevelProps) => {

    const {secondCategory} = _id;
    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-100%" }
    };
    return (
       <>

           {isOpened && (
               <motion.div
                   // whileHover={{scale: 1.03}}
                   // whileTap={{scale: 0.95}}
               >
                   {secondCategory}
               </motion.div>
           )}
       </>
    );
};
