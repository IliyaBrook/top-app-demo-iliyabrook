import {AnimatePresence, motion} from "framer-motion";
import classnames from "classnames";
import React, {ReactElement, useContext, useEffect, useState} from "react";
import {SideBarContext} from "@/app/contexts";
import {MenuItem} from "@/interfaces/menu.interface";
import {getPage} from "@/api/page";

interface NavCollapseItemProps<T = any> {
    title: string,
    classNames?: string[],
    activeClassName?: string,
    level?: number,
    item?: T,
    children?: ReactElement | ReactElement[]
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const NavCollapseItem = ({title, activeClassName = '', classNames = [], level, item, children, onClick}: NavCollapseItemProps) => {
    const context = useContext(SideBarContext);
    return (
        <motion.div
            className={classnames([
                ...classNames
            ])}
            onClick={event => {
                if (level === 1) {
                    if (context?.setRouteData) {
                        context.setRouteData(prev => {
                            return prev.map((m: MenuItem) => {
                                if (m._id.secondCategory === title) {
                                    return {
                                        ...m,
                                        // isOpened: !m.isOpened
                                        isOpened: true
                                    }
                                }
                                return m;
                            }) as MenuItem[];
                        });
                    }
                } else if (level === 2) {

                    if (context?.setRouteData) {
                        context.setRouteData(prev => {
                            return prev.map((m: MenuItem) => {
                                return {
                                    ...m,
                                    pages: m.pages.map(p => {
                                        if (p.category === title) {
                                            return {
                                                ...p,
                                                // isOpened: !m.isOpened
                                                isOpened: true
                                            }
                                        }
                                        return p;
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
                    onClick={onClick}
                >
                    <motion.div
                        whileHover={{scale: 1.03}}
                        whileTap={{scale: 0.95}}
                    >
                        {title}
                    </motion.div>
                    <div>
                        {item?.isOpened && children}
                    </div>
                </span>
        </motion.div>
    )
}
