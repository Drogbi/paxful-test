import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import css from './HeaderLink.module.scss';
import cx from 'classnames';

interface HeaderLinkProps {
    label: string;
    to: string;
    exact?: boolean;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({ exact, label, to }) => {
    let match = useRouteMatch({
        path: to,
        exact
    });

    return (
        <Link className={ cx(css.link, match && css.active) } to={ to }>{ label }</Link>
    );
};
