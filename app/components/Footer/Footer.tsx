'use client';

import {ReactElement} from "react";
import {FooterProps} from "@/app/components/Footer/Footer.props";
import styles from './Footer.module.scss';
import classNames from "classnames";
import { format } from 'date-fns';
import Link from "next/link";


export const Footer = ({className, ...props}: FooterProps): ReactElement => {
    return (
        <div
            className={classNames([
                styles.footerWrapper,
                className
            ])}
            {...props}
        >
            <div className={styles.copyrightNotice}>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <Link
                href={'https://google.com'}
                target="_blank"
                className={styles.userAgreement}
            >
                Пользовательское соглашение
            </Link>
            <Link
                href={'https://google.com'}
                target="_blank"
                className={styles.privacyPolicy}
            >
                Политика конфиденциальности
            </Link>
        </div>
    );
};
