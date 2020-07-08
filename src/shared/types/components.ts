export interface IEditable<TValue> {
    value: TValue;
    onChange: (value: TValue) => void;
}

export interface IClickable {
    onClick?: () => void;
}

export interface IHaveClassname {
    className?: string;
}

export type Color = 'primary' | 'gray' | 'green' | 'green-secondary' | 'red' | 'red-secondary' | 'white';

export interface IHaveColor {
    color?: Color;
}
