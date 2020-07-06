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

export type Color = 'gray' | 'green' | 'green-secondary';

export interface IHaveColor {
    color?: Color;
}