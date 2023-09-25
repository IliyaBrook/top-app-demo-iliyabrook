import React from "react";
import {ThirdLevelProps} from "@/app/components/Sidebar/Sidebar.props";
import {motion} from "framer-motion";
import Link from "next/link";
import {FourthLevelMenu} from "@/app/components/Sidebar/FourthLevelMenu";
import {useRouter} from 'next/navigation'

export const ThirdLevelMenu = ({pages, _id, isOpened, pathname}: ThirdLevelProps) => {
    const router = useRouter();
    const [fourthLevelMenu, setFourthLevelMenu] = React.useState(false);

    const {secondCategory} = _id;
    const variants = {
        open: {opacity: 1, y: 0},
        closed: {opacity: 0, y: "-100%"}
    };


    return isOpened && (
        <motion.div
            // whileHover={{scale: 1.03}}
            // whileTap={{scale: 0.95}}
            onClick={event => {
                // event.stopPropagation();
            }}
        >
            {secondCategory}



            {pages.map((thirdLevelItem) => {
                const {_id, category, title, alias} = thirdLevelItem;
                console.log('third_level_id: ', _id)
                console.log('log link route: ', `${pathname}/${alias}`)
                return (
                    <div
                        key={`third_level_key_${_id}`}
                        onClick={event => {
                        // event.stopPropagation()
                        console.log('log link route: ', `${pathname}/${alias}`)

                    }}>
                        <Link href={`${pathname}/${alias}`} >
                            <FourthLevelMenu
                                _id={_id}
                                category={category}
                                title={title}
                                alias={alias}
                                pathname={pathname}
                            />
                        </Link>
                    </div>
                )
            })}
        </motion.div>
    )
};
