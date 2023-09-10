'use client';
import {ReactElement, useEffect, useState} from "react";
import {SidebarProps} from "@/app/components/Sidebar/Sidebar.props";
import {FirstLevelMenuItem, MenuItem} from "@/interfaces/menu.interface";
import CourseIcon from './icons/courses_icon.svg';
import ServicesIcon from './icons/services_icon.svg';
import BooksIcon from './icons/books_icon.svg';
import ProductsIcon from './icons/products_icon.svg';
import {TopLevelCategory} from "@/interfaces/page.interface";
import Link from "next/link";
import classNames from "classnames";
import {usePathname} from "next/navigation";
import styles from './Sidebar.module.scss';
import {BuildSecondLevel} from "@/app/components/Sidebar/components/BuildSecondLevel";

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CourseIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];


export const Sidebar = ({className}: SidebarProps): ReactElement => {

    const router = usePathname();

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div
                        key={menu.route}
                        className={classNames([
                            styles.SidebarTest,
                            {[styles.active]: router === `/${menu.route}`},
                            {[styles.inactive]: router !== `/${menu.route}`},
                        ])}
                    >
                        <Link href={`/${menu.route}`}>
                            {menu.icon}
                            <span>{menu.name}</span>
                        </Link>
                        {`/${menu.route}` === router && <BuildSecondLevel {...menu}/>}
                    </div>
                ))}
            </>
        );
    };

    return (
        <div className={className}>
            {buildFirstLevel()}
        </div>
    );
};
