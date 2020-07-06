import { useState } from 'react';
import { IEditable } from '../types';

export const useValue = <TValue>(initialValue: TValue | (() => TValue)): IEditable<TValue> => {
    const [value, onChange] = useState(initialValue);
    return { value, onChange };
};
