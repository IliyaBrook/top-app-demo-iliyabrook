import React, {ReactElement} from "react";
import {Metadata} from "next";
import {Header} from "@/app/components/Header/Header";
import {Body} from "@/app/components/Body/Body";

export async function generateMetadata(): Promise<Metadata> {
    // for example get data from backend
    return {
        title: 'ComputedMeta',
        icons: {
            icon: '/someicong.ico'
        }
    };
}

// const {data: menu} = await axios.post<menuItem[]>(API.topPage.find, {
//     firstCategory: 0
// });

export default async function Home(): Promise<ReactElement> {

    return (
        <main>

           <Body/>
        </main>
    );
}
