import React from 'react';
import css from './HeaderLogo.module.scss';
import { Link, useRouteMatch } from 'react-router-dom';
import cx from 'classnames';

export const HeaderLogo: React.FC = () => {
    return (
        <Link className={ cx(css.logo) } to='/' >PAXFUL</Link>
    );
};
