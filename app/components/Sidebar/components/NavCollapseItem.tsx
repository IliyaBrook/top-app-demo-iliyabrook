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
                                        isOpened: !m.isOpened
                                    }
                                }
                                return m;
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
                                                isOpened: !p.isOpened  // Инвертируем текущее состояние
                                            }
                                        }
                                        return p;  // Оставляем другие элементы без изменений
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
