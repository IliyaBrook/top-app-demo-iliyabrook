'use client';

import React, {useEffect, useState} from 'react';
import {ReactElement} from "react";
import {RatingProps} from "@/app/components/rating/Rating.props";
import styles from './Rating.module.scss';
import RatingStars from './RatingStar.svg';

export const Rating = ({rating}: RatingProps): ReactElement => {
    const [state, setState] = useState(rating || 0);

    useEffect(() => {
        if (rating) {
            setState(rating + 1);
        }
    }, [rating]);

    const activeCount = state;
    const inactiveCount = state > 0 ? 5 - state : 5;
    const RenderRatingStars = [
        ...[...Array(activeCount)].map((_, idx) => <RatingStars fill="#7653FC" key={`active_star_${idx}`} id={idx + 1}/>),
        ...[...Array(inactiveCount)].map((_, idx) => <RatingStars fill="#E2E2E2" key={`active_star_${idx}`} id={idx + 1}/>)
    ];

    return (
        <div className={styles.ratingLayout}>
            {...RenderRatingStars.map((item, idx) => {
                return (
                    <div
                        className={styles.starElement}
                        key={`rating_star_${idx}`}
                        id={`${idx + 1}`}
                        onClick={() => setState(idx + 1) }
                    >
                        {item}
                    </div>
                )
            })}
        </div>
    );
};
