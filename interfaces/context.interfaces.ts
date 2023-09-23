import React, { ReactElement, useState } from "react";
import { TopLevelCategory } from './page.interface';

export interface PageInterface {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface SecondCategoryInterface {
    secondCategory: string;
    pages: PageInterface[];
}

export interface RouteDataInterface {
    _id: {
        secondCategory: string;
    };
    isOpened?: boolean;
    pages: PageInterface[];
}

export interface SideBarContextInterface {
    routeData: RouteDataInterface[];
    setRouteData: (routeData: (prev: any) => any) => void;
}

export interface FirstLevelMenuItem {
    route: string;
    name: string;
    icon: ReactElement;
    id: TopLevelCategory;
}
