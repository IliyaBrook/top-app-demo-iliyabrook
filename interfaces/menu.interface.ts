import { TopLevelCategory } from './page.interface';
import {ReactElement} from "react";

export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
	isOpened?: boolean;
}

interface ExtendedPageItem extends PageItem {
	isOpened?: boolean;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	isOpened?: boolean;
	pages: ExtendedPageItem[];
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: ReactElement;
	id: TopLevelCategory;
}
