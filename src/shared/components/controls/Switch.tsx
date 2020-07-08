import React from 'react';
import css from './Switch.module.scss';
import { IEditable, IHaveColor } from '../../types';
import cx from 'classnames';

interface SwitchProps extends IEditable<boolean>, IHaveColor {
}

export const Switch: React.FC<SwitchProps> = ({ value, onChange, color }) => {
    const onValueChange = (e: React.ChangeEvent<{ checked: boolean }>) => onChange(e.target.checked);
    const switchColor = color ? `color-${ color }` : 'color-green-secondary';

    return (
        <label className={ css.switch }>
            <input className={ css[switchColor] } onChange={ onValueChange } type="checkbox" checked={ value }/>
            <span className={ cx(css.slider, css[switchColor]) }/>
        </label>
    );
};
