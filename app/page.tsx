import React, {ReactElement} from "react";
import {Metadata} from "next";
import styles from './page.module.scss';
import {Footer, Header, Sidebar} from '@/app/components';


export async function generateMetadata(): Promise<Metadata> {
    // for example get data from backend
    return {
        title: 'ComputedMeta',
        icons: {
            icon: '/someicong.ico'
        }
    };
}

export default function Home(): ReactElement {
    return (
        <main className={styles.main}>
            <Header/>
            <Sidebar/>
            <div>

            </div>
            <Footer/>
        </main>
    );
}
