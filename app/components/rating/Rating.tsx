'use client';

import React, {useEffect, useState} from 'react';
import {ReactElement} from "react";
import {RatingProps} from "@/app/components/rating/Rating.props";
import styles from './Rating.module.scss';
import RatingStars from './RatingStar.svg';
import classNames from "classnames";

export const Rating = ({rating, classNamesArray = [], canEdit = false}: RatingProps): ReactElement => {
    const [state, setState] = useState(rating || 0);

    useEffect(() => {
        if (rating) {
            setState(rating);
        }
    }, [rating]);


    const onSetRating = (rating: number) => {
        if (canEdit) {
            setState(rating);
        }
    };

    const onChangeDisplay = (rating: number) => {
        if (canEdit) {
            setState(rating);
        }
    };


    return (
        <div className={classNames([styles.ratingLayout, ...classNamesArray])}>
            {[...Array(5)].map((_, index: number) => {
                const fillValue = index < state ? "#7653FC" : "#E2E2E2";
                return <RatingStars
                    className={styles.starElement}
                    style={{cursor: canEdit ? "pointer" : "default"}}
                    fill={fillValue}
                    key={`active_star_${index}`}
                    onClick={() =>  onSetRating(index + 1)}
                    // onMouseEnter={() => onChangeDisplay(index + 1)}
                />;
            })}
        </div>
    );
};
