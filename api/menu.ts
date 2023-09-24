
import {API} from "@/app/api";
import {PagesMenuData} from "@/app/components/Sidebar/Sidebar.props";

export async function getMenu(firstCategory: number): Promise<PagesMenuData[]> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({
            firstCategory
        }),
        headers: new Headers({'content-type': 'application/json'}),
        next: {
            revalidate: 10
        },
    });
    return res.json();
}
