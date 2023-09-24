import React from 'react';

export interface SideBarPage {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

export interface SecondCategory {
    _id: {
        secondCategory: string;
    };
    pages: SideBarPage[];
}

// export interface SideBarParams {
//     courses: string;
//     coursesMenuData: SecondCategory[];
// }
//
// export interface SideBarValue {
//     params: SideBarParams;
// }

// export interface MenuData {
//     status: string;
//     value: SideBarValue;
// }

interface Icon {
    key: null;
    ref: null;
    props: NonNullable<unknown>;
    _owner: null;
    _store: NonNullable<unknown>;
}



export interface routeServerSideProps {
    menuData: MenuData;
    pathname: string;
}

export interface SideBarProps {
    className?: string;
    menuData: MenuData[];
}

//
// export interface MenuParams {
//     elementData: MenuData;
//     params: SideBarParams;
//     className?: string;
// }


interface ElementData {
    route: string;
    name: string;
    icon: Icon | React.ReactElement;
    id: number;
}

export interface MenuParams {
    courses: string;
    coursesMenuData: SecondCategory[];
}

export interface MenuData {
    params: {
        courses: string;
        coursesMenuData: any;
    };
    elementData: ElementData;
}

export interface FirstLevelMenuProps extends MenuParams, ElementData {

}



