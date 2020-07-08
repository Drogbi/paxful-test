import React from 'react';
import css from './TradeItemInfoBlock.module.scss';

interface TradeItemInfoBlockProps {
    label?: string
}

export const TradeItemInfoBlock: React.FC<TradeItemInfoBlockProps> = ({ label, children }) => {
    return (
        <div className={ css.tradeItemInfoBlock }>
            { label && <div className={ css.label }>{ label }</div> }
            <div className={ css.content }>{ children }</div>
        </div>
    );
};
