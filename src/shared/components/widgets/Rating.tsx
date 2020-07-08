import React from 'react';
import css from './Rating.module.scss';
import { IHaveClassname } from '../../types';
import cx from 'classnames';

interface RatingProps extends IHaveClassname {
    likes: number;
    dislikes: number;
    theme?: 'primary' | 'secondary';
}

export const Rating: React.FC<RatingProps> = ({ likes, dislikes, className, theme }) => {
    const ratingTheme = theme || 'primary';
    return (
        <div className={ cx(css.rating, className, css[ratingTheme]) }>
            <span className={ css.likes }>{ `+${ likes }` }</span>
            <span> / </span>
            <span className={ css.dislikes }>{ `-${ dislikes }` }</span>
        </div>
    );
};
