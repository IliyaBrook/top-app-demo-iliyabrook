import React, {ReactElement} from "react";
import {Metadata} from "next";
import {Body} from "@/app/components/Body/Body";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: 'ComputedMeta',
        icons: {
            icon: '/someicong.ico'
        }
    };
}

export default async function Home(): Promise<ReactElement> {

    return (
        <main>
           <Body/>
        </main>
    );
}
