import React from "react";
import {motion} from "framer-motion";
import {SideBarPage} from "@/app/components/Sidebar/Sidebar.props";
import {useRouter} from "next/navigation";
import Link from "next/link";

export const FourthLevelMenu = ({_id, category, title, alias, pathname}: SideBarPage) => {
    console.log('FourthLevelMenu: pathname ', pathname)
    console.log('FourthLevelMenu: alias ', alias)
    const router = useRouter();
    const isOpened = true

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
