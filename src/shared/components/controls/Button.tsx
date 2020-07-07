import React from 'react';
import css from './Button.module.scss';
import { IClickable, IHaveClassname, IHaveColor } from '../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import cx from 'classnames';

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
