import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import { IHaveClassname } from '../../types';
import css from './Avatar.module.scss';

interface AvatarProps extends IHaveClassname {
    url?: string;
    size?: number;
    title?: string;
    border?: boolean;
}

export const Avatar: React.FC<AvatarProps> = ({ url, size, title, className, border }) => {
    const DEFAULT_AVATAR_SIZE = 46;
    const avatarSize = size || DEFAULT_AVATAR_SIZE;

    return (
        url
            ? <img title={ title } width={ avatarSize } height={ avatarSize } alt='user avatar' className={ cx(css.avatar, className, border && css.border) } src={ url }/>
            : <FontAwesomeIcon title={ title } className={ cx(css.avatarPlaceholder, className, border && css.border) } style={ { width: avatarSize, height: avatarSize } } icon={ faUser }/>
    );
};
