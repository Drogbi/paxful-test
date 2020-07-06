import React from 'react';
import css from './Header.module.scss';
import { HeaderLink } from './HeaderLink';
import {
    BUY_BITCOINS_ROUTE, SELL_BITCOINS_ROUTE, SUPPORT_ROUTE, WALLET_ROUTE, YOUR_ACCOUNT_ROUTE
} from '../../../constants';
import { HeaderLogo } from './HeaderLogo';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header className={ css.header }>
            <HeaderLogo/>
            <div className={ css.spacer }/>
            <HeaderLink label='Buy bitcoins' to={ BUY_BITCOINS_ROUTE }/>
            <HeaderLink label='Sell bitcoins' to={ SELL_BITCOINS_ROUTE }/>
            <HeaderLink label='Wallet' to={ WALLET_ROUTE } />
            <HeaderLink label='Support' to={ SUPPORT_ROUTE }/>
            <HeaderLink label='Your Account' to={ YOUR_ACCOUNT_ROUTE } />
        </header>
    );
};
