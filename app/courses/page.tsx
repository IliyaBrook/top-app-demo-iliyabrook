import {firstLevelMenu} from "@/api/data";
import {getMnu} from "@/api/menu";

export async function generateStaticParams() {
    return firstLevelMenu.map( async (menu) => {
        const menuId = menu.id;
        const coursesMenuData = await getMnu(menuId);
        // console.log('pages generateStaticParams: ', coursesMenuData)
        return {
            params: {courses: menu.route, coursesMenuData},
        };
    });
}

export default async function Courses({params: {courses}} : {params: { courses: string }}): Promise<any> {
    console.log('pages props 333: ', courses);
    // ваш код
}
