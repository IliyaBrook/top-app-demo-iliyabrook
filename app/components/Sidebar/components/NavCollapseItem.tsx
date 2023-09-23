import {motion} from "framer-motion";
import classnames from "classnames";
import {ReactElement, useContext} from "react";
import {SideBarContext} from "@/app/contexts";
import {MenuItem} from "@/interfaces/menu.interface";

interface NavCollapseItemProps {
    title: string,
    classNames?: string[],
    activeClassName?: string,
    level?: number,
    item?: MenuItem,
    children?: ReactElement | ReactElement[]
}

export const NavCollapseItem = ({title, activeClassName = '', classNames = [], level, item, children}: NavCollapseItemProps) => {

    const context= useContext(SideBarContext);

    return (
        <motion.div
            onClick={() => {
                if (level === 2) {
                    if (context?.setRouteData) {
                        context.setRouteData(prev => {
                            return prev.map((m: MenuItem) => {
                                if (m._id.secondCategory === title) {
                                    return {
                                        ...m,
                                        isOpened: true
                                    }
                                }
                                return {
                                    ...m,
                                    isOpened: false
                                }
                            } );
                        });
                    }
                }
            }}
            whileHover={{scale: 1.03}}
            className={classnames([
                ...classNames
            ])}
        >
            <span
                className={classnames([
                    {[activeClassName]: item?.isOpened}
                ])}
            >
                <div>
                    {title}
                </div>
                <div>
                    {item?.isOpened && children}
                </div>
            </span>
        </motion.div>
    )
}
