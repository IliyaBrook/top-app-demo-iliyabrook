'use client';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
import {ReactElement} from "react";

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): ReactElement => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
            })}
            {...props}
        >
            {children}
            {arrow != 'none' && <span className={cn(styles.arrow, {
                [styles.down]: arrow == 'down'
            })}>
				<ArrowIcon/>
			</span>}
        </button>
    );
};
