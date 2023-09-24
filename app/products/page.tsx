// app/courses/page.tsx

import {firstLevelMenu} from "@/app/components/Sidebar/data";
import {getMenu} from "@/api/menu";
import {ReactElement} from "react";
import {getActivePath} from "@/app/utils/serverSideUtils";

// const menu = await getMenu(0);
// return menu.flatMap(item => item.pages.map(page => ({alias: page.alias})));
// export async function generateStaticParams() {
//     const menu = await getMenu(0);
//     return menu.flatMap(item => item.pages.map((page:any) => ({alias: page.alias})));
// }

export async function generateStaticParams() {
    const menu = await getMenu(1);
    return menu.flatMap(item => item.pages.map((page: any) => ({alias: page.alias})));
}

// { params: { pages } }: { params: { pages: string } }
export default function ProductsPage(props): ReactElement {
    const pathname = getActivePath()
    console.log('alias server props: ', props);

    return (
        <div>
            <span>{pathname}</span>
            <h1>{JSON.stringify(props)}</h1>
        </div>
    )
}
