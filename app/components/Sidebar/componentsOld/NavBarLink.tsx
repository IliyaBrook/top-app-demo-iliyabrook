import React, {useState} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import classnames from "classnames";
import styles from "@/app/components/Sidebar/Sidebar.module.scss";
import classNames from "classnames";

interface NavBarLinkProps {
    item: {
        alias: string,
        category: string,
        title: string,
        _id: string
    },
    routeTo: string,
    variant: 'collapse' | 'link',
    classNames?: string[],
    activeClassName?: string,
    label?: string
}

export const NavBarLink = ({item, routeTo, variant = 'collapse', activeClassName = '', classNames = [], label}: NavBarLinkProps) => {
    const {alias, category, title, _id} = item;
    const [isActive, setActive] = useState<boolean>(false);
    switch (variant) {
        case 'collapse':
            return (
                <motion.div
                    key={_id}
                    whileHover={{scale: 1.03}}
                >
                    {/*  <Link href={`/${m.route}`}>*/}
                    <Link href={routeTo}>
                        <div className={classnames([
                            ...classNames,
                            {[activeClassName]: isActive}
                        ])}>
                            <span>{label}</span>
                        </div>
                    </Link>
                </motion.div>
            )
    }
}
