import {MenuItem} from "@/interfaces/menu.interface";
import {API} from "@/app/api";

export async function getMnu(firstCategory: number): Promise<MenuItem[]> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({
            firstCategory
        }),
        headers: new Headers({'content-type': 'application/json'})
    });
    console.log('res: ', res);
    return res.json();
}
