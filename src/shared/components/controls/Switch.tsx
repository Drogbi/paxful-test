import React from 'react';
import cx from 'classnames';
import { IEditable, IHaveColor } from '../../types';
import css from './Switch.module.scss';

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
