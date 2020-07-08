import React, { useState } from 'react';
import css from './Navigation.module.scss';
import { NavigationItem } from './NavigationItem';
import { matchPath, useLocation, useRouteMatch } from 'react-router-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

interface NavigationProps {
    items: { to: string, label: string }[];
}

export const Navigation: React.FC<NavigationProps> = ({ items }) => {
    let { url } = useRouteMatch();
    let location = useLocation();

    const [isNavOpen, setIsNavOpen] = useState(false);

    const isNavItemActive = (to: string) => {
        const path = `${ url }${ to }`;
        return !!matchPath(location.pathname, {
            path
        });
    };

    return (
        <div className={ cx(css.navigation, isNavOpen && css.openedNavigation) }>
            <div className={ css.navigationItems }>
                { items.map((navItem) => {
                    const isActive = isNavItemActive(navItem.to);
                    return <NavigationItem className={ cx(css.navItem, isActive && css.navItemActive) } isActive={ isActive } { ...navItem }/>;
                }) }
            </div>
            <NavigationItem onClick={ () => setIsNavOpen(!isNavOpen) } icon={ faCaretDown } className={ css.dropDownButton }/>
        </div>
    );
};
