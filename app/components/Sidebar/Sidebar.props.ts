interface Page {
    alias: string;
    title: string;
    _id: string;
    category: string;
}

interface SecondCategory {
    _id: {
        secondCategory: string;
    };
    pages: Page[];
}

interface Params {
    courses: string;
    coursesMenuData: SecondCategory[];
}

interface Value {
    params: Params;
}

interface MenuData {
    status: string;
    value: Value;
}

export interface SidebarProps {
    className?: string;
    menuData: MenuData[];
}
