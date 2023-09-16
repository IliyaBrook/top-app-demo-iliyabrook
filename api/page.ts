import {API} from "@/app/api";
import {TopPageModel} from "@/interfaces/page.interface";
import {IGetPageResponse} from "@/api/interfaces";

export async function getPage(alias: string): Promise<IGetPageResponse | null> {
    const res = await fetch(API.topPage.byAlias + alias, {
        next: {
            // если мы хотим валидировать данные с помощью next api
            //нужно создать файл api\menu.ts
            // tags: ['menu']
            // в место revalidate: 10 нужно указать теги {tags: ['menu']}
            revalidate: 10
        }
    });
    if (!res.ok) {
        return null;
    }
    return res.json();
}
