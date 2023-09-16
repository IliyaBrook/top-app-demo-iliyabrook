'use client';

import React, {ReactElement, useEffect, useState} from 'react';
import {getPage} from "@/api/page";
import {notFound, usePathname} from "next/navigation";
import styles from './courses.module.scss';
import {IGetPageResponse} from "@/api/interfaces";

// export async function getCoursePages() {
//     const pages = await getPage("data-science");
//     console.log('pages res:', pages);
// }

export default function PageProduct({params}: {params: {alias: string}}): ReactElement {
    const pathname = usePathname();
    const courseName = params.alias;

    const [courseData, setCourseData] = useState<IGetPageResponse['blog']>();
    console.log('courseData:', courseData)
    useEffect(() => {
        if (courseName) {
            getPage(courseName)
                .then((res) => {
                    if (res) {
                        if (res) {
                            setCourseData(res.blog);
                        }
                    }
                });
        }
    }, [courseName]);


    if (!pathname) {
        notFound();
    }

    return (
        <div className={styles.wrapper} key={courseData?._id}>
            <div className={styles.title}>
                {courseData?.h1}
            </div>
            <div className={styles.text}>
                {courseData?.metaDescription}
            </div>
        </div>
    );
}
