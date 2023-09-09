import React, {ReactElement} from "react";
import {Metadata} from "next";
import {Htag, P} from "@/app/components";
import {Button} from "@/app/components/Button/Button";
import Logo from '@/public/vercel.svg'
import {Rating} from "@/app/components/rating/Rating";


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
        <div>
            <Htag tag='h1'>
                <Button
                    appearance="primary"
                    arrow="right"
                >
                    test button
                </Button>

                <Button
                    appearance="ghost"
                    arrow="down"
                >
                    test button
                </Button>
                <Logo
                    width={50}
                />
                <P size="large">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias amet aperiam asperiores
                </P>
                <Rating canEdit={true}/>
            </Htag>
        </div>
    );
}
