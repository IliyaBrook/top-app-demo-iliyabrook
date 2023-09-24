import { TopLevelCategory } from './page.interface';
import {ReactElement} from "react";
interface ExtendedPageItem extends PageItem {
	isOpened?: boolean;
}

export interface PageItem {
	_id: {
		secondCategory: string;
	};
	isOpened?: boolean;
	pages: ExtendedPageItem[];
}



export interface MenuItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
	isOpened?: boolean;
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: ReactElement;
	id: TopLevelCategory;
}
