import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import cx from 'classnames';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IClickable, IHaveClassname } from '../../../types';
import css from './NavigationItem.module.scss';

interface NavigationItemProps extends IClickable, IHaveClassname {
    label?: string;
    to?: string;
    isActive?: boolean;
    icon?: IconProp;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ to, label, isActive, onClick, className, icon }) => {
    let { url } = useRouteMatch();
    const path = `${ url }${ to }`;

    return (
        onClick
            ? (
                <div className={ cx(css.navigationItem, className) } onClick={ onClick }>
                    { label }
                    { icon && <FontAwesomeIcon icon={ icon }/> }
                </div>
            )
            : (
                <Link to={ path } onClick={ onClick } className={ cx(css.navigationItem, isActive && css.active, className) } >
                    { label }
                    { icon && <FontAwesomeIcon icon={ icon }/> }
                </Link>
            )
    );
};
