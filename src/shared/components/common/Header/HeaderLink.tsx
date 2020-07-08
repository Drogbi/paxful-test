import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import cx from 'classnames';
import css from './HeaderLink.module.scss';

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
