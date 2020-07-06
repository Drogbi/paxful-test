import React from 'react';
import css from './Navigation.module.scss';

interface NavigationProps {

}

export const Navigation: React.FC<NavigationProps> = (props) => {
    return (
        <div className={ css.navigation }>
            { props.children }
        </div>
    );
};
