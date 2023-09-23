import {AnimatePresence, motion} from "framer-motion";
import classnames from "classnames";
import {ReactElement, useContext, useEffect, useState} from "react";
import {SideBarContext} from "@/app/contexts";
import {MenuItem} from "@/interfaces/menu.interface";

interface NavCollapseItemProps<T = any> {
    title: string,
    classNames?: string[],
    activeClassName?: string,
    level?: number,
    item?: T,
    children?: ReactElement | ReactElement[]
}

export const NavCollapseItem = ({title, activeClassName = '', classNames = [], level, item, children}: NavCollapseItemProps) => {
    const context = useContext(SideBarContext);
    return (
        <motion.div
            className={classnames([
                ...classNames
            ])}
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
                            }) as MenuItem[];
                        });
                    }
                } else if (level === 3) {
                    if (context?.setRouteData) {
                        context.setRouteData(prev => {
                            return prev.map((m: MenuItem) => {
                                return {
                                    ...m,
                                    pages: m.pages.map(p => {
                                        if (p.category === title) {
                                            return {
                                                ...p,
                                                isOpened: true
                                            }
                                        }
                                        return {
                                            ...p,
                                            isOpened: false
                                        }
                                    })
                                }
                            });
                        });
                    }
                }
            }}
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
