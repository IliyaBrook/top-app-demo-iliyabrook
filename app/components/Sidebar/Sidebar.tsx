'use client';

import {ReactElement} from "react";
import {SidebarProps} from "@/app/components/Sidebar/Sidebar.props";
import {FirstLevelMenuItem} from "@/interfaces/menu.interface";
import CourseIcon from './icons/courses_icon.svg';
import ServicesIcon from './icons/services_icon.svg';
import BooksIcon from './icons/books_icon.svg';
import ProductsIcon from './icons/products_icon.svg';
import {TopLevelCategory} from "@/interfaces/page.interface";
import Link from "next/link";

const firstLevelMenu: FirstLevelMenuItem[] = [
    {route: 'courses', name: 'Курсы', icon: <CourseIcon/>, id: TopLevelCategory.Courses},
    {route: 'services', name: 'Сервисы', icon: <ServicesIcon/>, id: TopLevelCategory.Services},
    {route: 'books', name: 'Книги', icon: <BooksIcon/>, id: TopLevelCategory.Books},
    {route: 'products', name: 'Продукты', icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];


export const Sidebar =  ({className}: SidebarProps): ReactElement => {

    const buildFirstLevel = () => {
        return (
            <>
                {firstLevelMenu.map(menu => (
                    <div
                        key={menu.route}

                    >
                        <Link href={`/${menu.route}`}>
                            {menu.icon}
                            {menu.name}
                        </Link>
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
