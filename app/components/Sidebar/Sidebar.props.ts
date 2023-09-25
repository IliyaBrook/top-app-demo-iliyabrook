import React from 'react';

export interface SideBarPage {
    alias: string;
    title: string;
    _id: string;
    category: string;
    pathname: string;
}

export interface SecondCategory {
    _id: {
        secondCategory: string;
    };
    pages: SideBarPage[];
}

interface Icon {
    key: null;
    ref: null;
    props: NonNullable<unknown>;
    _owner: null;
    _store: NonNullable<unknown>;
}



export interface SideBarProps {
    className?: string;
    menuData: MenuData[];
}



interface ElementData {
    route: string;
    name: string;
    icon: Icon | React.ReactElement;
    id: number;
}

export interface MenuParams {
    pages: string;
    pagesMenuData: SecondCategory[];
}

export interface MenuData {
    params: {
        pages: string;
        pagesMenuData: any;
    };
    elementData: ElementData;
}

export interface FirstLevelMenuProps extends MenuParams, ElementData {
    pathname: string;
}

// second leve interfaces

export interface SecondLevelData {
    _id: {
        secondCategory: string;
    };
    pages: SideBarPage[];
}

export interface SecondLevelProps {
    secondLevelData: SecondLevelData[];
    pathname: string;
    isOpened: boolean;
}

export interface ThirdLevelDataPages {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface ThirdLevelDataId {
    secondCategory: string
}

export interface ThirdLevelProps {
    pages: ThirdLevelDataPages[];
    _id: ThirdLevelDataId;
    isOpened: boolean;
    pathname: string;
}

// MenuItem


interface Page {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

interface PagesMenuDataItem {
    _id: {
        secondCategory: string;
    };
    pages: Page[];
}

export type PagesMenuData = PagesMenuDataItem[];
