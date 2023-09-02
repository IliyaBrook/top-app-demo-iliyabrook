import React from 'react';
import {ReactElement} from "react";
import {HtagProps} from "@/app/components/Htag/Htag.props";

export const Htag = ({tag, children}: HtagProps): ReactElement => {
    return (
        <>
            <h1>{children}</h1>
        </>
    );
};
