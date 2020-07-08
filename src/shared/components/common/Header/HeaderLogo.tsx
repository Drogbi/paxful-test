import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import css from './HeaderLogo.module.scss';

export const HeaderLogo: React.FC = () => {
    return (
        <Link className={ cx(css.logo) } to='/'>PAXFUL</Link>
    );
};
