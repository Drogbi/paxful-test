import React from 'react';
import cx from 'classnames';
import { IHaveClassname } from '../../types';
import css from './Rating.module.scss';

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
