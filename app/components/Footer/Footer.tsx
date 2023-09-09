'use client';

import {ReactElement} from "react";
import {FooterProps} from "@/app/components/Footer/Footer.props";

export const Footer = ({className, children}: FooterProps): ReactElement => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};
