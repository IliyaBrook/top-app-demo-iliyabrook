import React from 'react';
import {ReactElement} from "react";
import {HtagProps} from "@/app/components/Htag/Htag.props";

export const Htag = ({tag = 'h1', children, ...props}: HtagProps): ReactElement => {

    const Tag = tag;

    return (
        <div {...props}>
            <Tag>{children}</Tag>
        </div>
    );
};
