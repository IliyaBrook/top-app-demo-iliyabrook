import React from "react";
import {motion} from "framer-motion";
import {SideBarPage} from "@/app/components/Sidebar/Sidebar.props";
import {useRouter} from "next/navigation";
import Link from "next/link";

export const FourthLevelMenu = ({_id, category, title, alias, pathname}: SideBarPage) => {
    const router = useRouter();
    const isOpened = true

    const variants = {
        open: {opacity: 1, y: 0},
        closed: {opacity: 0, y: "-100%"}
    };

    return (
        <>

            {isOpened && (
                <motion.div
                    // onClick={() => {
                    //     router.push(`/${pathname}/${alias}`);
                    // }}
                    // whileHover={{scale: 1.03}}
                    // whileTap={{scale: 0.95}}
                >
                    {/*{title}*/}

                </motion.div>
            )}
        </>
    );
};
