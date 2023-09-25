import React, {ReactElement} from "react";
import {IGetPageResponse} from "@/api/interfaces";
import {getPage} from "@/api/page";
import {notFound} from "next/navigation";


export default async function  PageCourses({params}: {params: {alias: string}}): Promise<ReactElement> {
    // courses/alias
    console.log(`PageCourses by alias params log: `, params)
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
