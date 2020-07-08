import React from 'react';
import css from './PagePlaceholder.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { Page } from '../layout';
import { Button } from '../controls';
import { Link } from 'react-router-dom'
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../constants';

interface PagePlaceholderProps {

}

export const PagePlaceholder: React.FC<PagePlaceholderProps> = (props) => {
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
