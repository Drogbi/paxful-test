import React from 'react';
import cx from 'classnames';
import { IHaveClassname } from '../../types';
import css from './Page.module.scss';

interface PageProps extends IHaveClassname {

}

export const Page: React.FC<PageProps> = ({ className, children }) => {
    return (
        <div className={ cx(css.page, className) }>
            { children }
        </div>
    );
};
