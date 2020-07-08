import React from 'react';
import cx from 'classnames';
import { IHaveClassname, TradeStatus as TradeStatusType } from '../../../../../shared/types';
import css from './TradeStatus.module.scss';

interface TradeStatusProps extends IHaveClassname {
    status: TradeStatusType;
}

export const TradeStatus: React.FC<TradeStatusProps> = ({ status, className }) => {
    const isPaid = status === TradeStatusType.PAID;
    return (
        <div className={ cx(css.tradeStatus, isPaid && css.paid, className) }>{ status }</div>
    );
};
