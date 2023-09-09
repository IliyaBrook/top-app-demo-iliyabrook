'use client';

import {ReactElement} from "react";
import {HeaderProps} from "@/app/components/Header/Header.props";

export const Header = ({className, text}: HeaderProps): ReactElement => {
    return (
        <div className={className}>
            {text}
        </div>
    );
};
