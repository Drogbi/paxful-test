import React from 'react';
import css from './Switch.module.scss';
import { IEditable } from '../../types';

interface SwitchProps extends IEditable<boolean>{

}

export const Switch: React.FC<SwitchProps> = ({ value, onChange }) => {
    const onValueChange = (e: React.ChangeEvent<{ checked: boolean }>) => onChange(e.target.checked)
    return (
        <label className={ css.switch }>
            <input onChange={ onValueChange } type="checkbox" checked={ value }/>
            <span className={ css.slider }/>
        </label>
    );
};
