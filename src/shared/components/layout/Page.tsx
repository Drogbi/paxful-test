import React from 'react';
import css from './Page.module.scss';

interface PageProps {

}

export const Page: React.FC<PageProps> = (props) => {
    return (
        <div className={ css.page }>
            { props.children }
        </div>
    );
};
