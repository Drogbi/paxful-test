import React from 'react';
import css from './NavigationItem.module.scss';
import { Link, useRouteMatch, matchPath, useLocation } from 'react-router-dom';
import cx from 'classnames';

interface NavigationItemProps {
    label: string;
    to: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ to, label }) => {
    let { url } = useRouteMatch();
    let location = useLocation();
    const path = `${ url }${ to }`;
    const match = matchPath(location.pathname, {
        path
    })

    return (
        <Link className={ cx(css.navigationItem, match && css.active) } to={ path }>{ label }</Link>
    );
};
