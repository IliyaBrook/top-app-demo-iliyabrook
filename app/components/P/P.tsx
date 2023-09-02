import React from 'react';
import {ReactElement} from "react";
import {PProps} from "@/app/components/P/P.props";
import classnames from 'classnames';
import styles from './P.module.scss';

export const P = ({children, size}: PProps): ReactElement => {
    return (
        <>
            <p className={classnames({
                [styles.small]: size == 'small',
                [styles.medium]: size == 'medium',
                [styles.large]: size == 'large',
            })}>
                {children}
            </p>
        </>
    );
};
