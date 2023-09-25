import React, { ReactElement, useState } from "react";
import { TopLevelCategory } from './page.interface';
import { Dispatch, SetStateAction } from "react";

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
    firstLevelOpen: boolean;
    setFirstLevelOpen: Dispatch<SetStateAction<boolean>>;
    secondLevelOpen: boolean;
    setSecondLevelOpen: Dispatch<SetStateAction<boolean>>;
}

export interface FirstLevelMenuItem {
    route: string;
    name: string;
    icon: ReactElement;
    id: TopLevelCategory;
}
