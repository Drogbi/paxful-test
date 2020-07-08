import React from 'react';
import css from './Page.module.scss';
import { IHaveClassname } from '../../types';
import cx from 'classnames';

interface PageProps extends IHaveClassname {

}

export const Page: React.FC<PageProps> = ({ className, children }) => {
    return (
        <div className={ cx(css.page, className) }>
            { children }
        </div>
    );
};
