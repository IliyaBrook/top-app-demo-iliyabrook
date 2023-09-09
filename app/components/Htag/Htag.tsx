import React from 'react';
import {ReactElement} from "react";
import {HtagProps} from "@/app/components/Htag/Htag.props";

export const Htag = ({tag = 'h1', children}: HtagProps): ReactElement => {

    const renderHtag = () => {
        switch (tag) {
            case 'h1':
                return <h1>{children}</h1>;
            case 'h2':
                return <h2>{children}</h2>;
            case 'h3':
                return <h3>{children}</h3>;
            default:
                return <></>;
        }
    };


    return <div>{renderHtag()}</div>;
};
