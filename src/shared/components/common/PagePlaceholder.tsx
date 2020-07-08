import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Page } from '../layout';
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../constants';
import css from './PagePlaceholder.module.scss';

export const PagePlaceholder: React.FC = () => {
    return (
        <Page className={ css.pagePlaceholder }>
            <FontAwesomeIcon className={ css.maintainIcon } icon={ faWrench }/>
            <div className={ css.content }>
                This page on development stage. { '\n' }
                However, you could try our trade platform on link below.
            </div>
            <Link to={ `${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }` }>Try it now!</Link>
        </Page>
    );
};
