import React, {ReactElement} from 'react';
import {Metadata} from "next";
import {getPage} from "@/api/page";
import {notFound} from "next/navigation";
import {IGetPageResponse} from "@/api/interfaces";

export const metadata: Metadata = {
    title: 'Products',
};

export default async function PageProduct({params}: {params: {alias: string}}): Promise<ReactElement> {
    const page: IGetPageResponse | null = await getPage(params.alias);

    if (!page) {
        notFound();
    }

    return (
        <div>
            <h1>Courses</h1>
        </div>
    )
}
