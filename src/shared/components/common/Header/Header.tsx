import React, { useState } from 'react';
import css from './Header.module.scss';
import { HeaderLink } from './HeaderLink';
import {
    BUY_BITCOINS_ROUTE, SELL_BITCOINS_ROUTE, SUPPORT_ROUTE, WALLET_ROUTE, YOUR_ACCOUNT_ROUTE
} from '../../../constants';
import { HeaderLogo } from './HeaderLogo';
import { Button } from '../../controls';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = (props) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const handleLinkClick = (e: React.MouseEvent) => {
        if ((e.target as any).tagName === 'A') {
            setIsBurgerOpen(false);
        }
    }

    return (
        <header className={ css.header }>
            <HeaderLogo/>
            <div className={ css.spacer }/>
            <nav onClick={ handleLinkClick } className={ cx(css.nav, isBurgerOpen && css.openedBurgerNav) }>
                <HeaderLink  label='Buy bitcoins' to={ BUY_BITCOINS_ROUTE }/>
                <HeaderLink label='Sell bitcoins' to={ SELL_BITCOINS_ROUTE }/>
                <HeaderLink label='Wallet' to={ WALLET_ROUTE } />
                <HeaderLink label='Support' to={ SUPPORT_ROUTE }/>
                <HeaderLink label='Your Account' to={ YOUR_ACCOUNT_ROUTE } />
            </nav>
            <Button className={ css.burger } onClick={ () => setIsBurgerOpen(!isBurgerOpen) } icon={ faHamburger }/>
        </header>
    );
};
