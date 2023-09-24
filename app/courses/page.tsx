import {firstLevelMenu} from "@/app/components/Sidebar/data";
import {getMnu} from "@/api/menu";

export async function generateStaticParams() {
    return firstLevelMenu.map( async (menu) => {
        const menuId = menu.id;
        const coursesMenuData = await getMnu(menuId);
        return {
            params: {courses: menu.route, coursesMenuData},
        };
    });
}

export default async function Courses({params: {courses}} : {params: { courses: string }}): Promise<any> {
    // ваш код
}
