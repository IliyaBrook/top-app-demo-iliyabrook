import React, {ReactElement} from "react";
import {Metadata} from "next";
import {getMnu} from "@/api/menu";

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
    const menu = await getMnu(0);
    console.log('menu from server: ', menu);
    return (
        <main>
           <div>
               <div>{JSON.stringify(menu)}</div>
               <div>{menu.length}</div>
           </div>
        </main>
    );
}
