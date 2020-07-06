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
}

export const Button: React.FC<ButtonProps> = ({ icon, onClick, label, className, color, shadow }) => {
    const buttonColor = color ? `color-${ color }` : 'color-gray';

    return (
        <button onClick={ onClick } className={ cx(css.button, className, css[buttonColor], shadow && css.shadow) }>
            { icon && <FontAwesomeIcon icon={ icon }/> }
            { label && <span className={ css.label }>{ label }</span> }
        </button>
    );
};
