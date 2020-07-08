import React, { useState } from 'react';
import { matchPath, useLocation, useRouteMatch } from 'react-router-dom';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';
import { NavigationItem } from './NavigationItem';
import css from './Navigation.module.scss';

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

    const handleNavItemClick = (e: React.MouseEvent) => {
        if ((e.target as any).tagName === 'A') {
            setIsNavOpen(false);
        }
    }

    const onDropdownClick = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <div className={ cx(css.navigation, isNavOpen && css.openedNavigation) }>
            <div onClick={ handleNavItemClick } className={ css.navigationItems }>
                { items.map((navItem) => {
                    const isActive = isNavItemActive(navItem.to);
                    return <NavigationItem className={ cx(css.navItem, isActive && css.navItemActive) } isActive={ isActive } { ...navItem }/>;
                }) }
            </div>
            <NavigationItem onClick={ onDropdownClick } icon={ isNavOpen ? faCaretUp : faCaretDown } className={ css.dropDownButton }/>
        </div>
    );
};
