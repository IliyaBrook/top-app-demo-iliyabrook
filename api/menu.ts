import {MenuItem} from "@/interfaces/menu.interface";
import {API} from "@/app/api";

export async function getMnu(firstCategory: number): Promise<MenuItem[]> {
    const res = await fetch(API.topPage.find, {
        method: 'POST',
        body: JSON.stringify({
            firstCategory
        }),
        headers: new Headers({'content-type': 'application/json'}),
        next: {
            revalidate: 10,
            // если мы хотим валидировать данные с помощью next api
            //нужно создать файл api\menu.ts
            // tags: ['menu']
        },
    });
    return res.json();
}
