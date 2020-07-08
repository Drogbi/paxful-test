import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cx from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IClickable, IHaveClassname, IHaveColor } from '../../types';
import css from './Button.module.scss';

interface ButtonProps extends IClickable, IHaveClassname, IHaveColor {
    icon?: IconProp;
    label?: string;
    shadow?: boolean;
    fill?: 'none' | 'solid';
}

export const Button: React.FC<ButtonProps> = ({ icon, onClick, label, className, color, shadow, fill }) => {
    const buttonColor = color ? `color-${ color }` : 'color-primary';
    const buttonFill = fill ? `fill-${ fill }` : 'fill-solid';

    return (
        <button onClick={ onClick } className={ cx(css.button, className, css[buttonColor], shadow && css.shadow, css[buttonFill]) }>
            { icon && <FontAwesomeIcon icon={ icon }/> }
            { label && <span className={ css.label }>{ label }</span> }
        </button>
    );
};
