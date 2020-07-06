import React from 'react';
import css from './Avatar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

interface AvatarProps {
    url?: string;
    size?: number;
    title?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ url, size, title }) => {
    const DEFAULT_AVATAR_SIZE = 46;
    const avatarSize = size || DEFAULT_AVATAR_SIZE;

    return (
        url
            ? <img title={ title } width={ avatarSize } height={ avatarSize } alt='user avatar' className={ css.avatar } src={ url }/>
            : <FontAwesomeIcon title={ title } className={ css.avatarPlaceholder } style={ { width: avatarSize, height: avatarSize } } icon={ faUser }/>
    );
};
