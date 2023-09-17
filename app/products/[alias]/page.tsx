import React, {ReactElement} from 'react';
import {Metadata} from "next";
import {getPage} from "@/api/page";
import {notFound} from "next/navigation";
import {getMnu} from "@/api/menu";
import {IGetPageResponse} from "@/api/interfaces";

export const metadata: Metadata = {
    title: 'Products',
};

export async function generateStaticParams() {
    const menu = await getMnu(0);
    console.log('menu:', menu)
    return menu.flatMap(item => item.pages.map(page => ({ params: { alias: page.alias } })));
}

export default async function PageProduct({params}: {params: {alias: string}}): Promise<ReactElement> {
    const page: IGetPageResponse | null = await getPage(params.alias);

    if (!page) {
        notFound();
    }

    return (
        <div>
            {page.title}
        </div>
    );
}
