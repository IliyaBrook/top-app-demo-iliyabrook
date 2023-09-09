import React, {ReactElement} from 'react';
import {Button, Htag, P} from "@/app/components";
import Logo from "@/public/vercel.svg";
import {Rating} from "@/app/components/rating/Rating";
import styles from './Body.module.css';

export const Body = (): ReactElement => {
    return (
        <div className={styles.body}>

            <Htag tag="h3">
                Заголовок
            </Htag>
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
        </div>
    );
};
