import React, { useEffect, useReducer } from 'react';
import css from './TradeItemInfoDate.module.scss';
import moment from 'moment';
import { timer } from 'rxjs';

interface TradeItemInfoDateProps {
    date: string;
}

export const TradeItemInfoDate: React.FC<TradeItemInfoDateProps> = ({ date }) => {

    const [, forceUpdate] = useReducer(x => x + 1, 0);

    // to update ${startDate} ago in real-time
    useEffect(() => {
        const observable = timer(0, 60 * 1000);
        observable.subscribe(() => forceUpdate());
    }, []);

    return (
        <div className={ css.tradeItemInfoDate }>{ `Started ${ moment(date).fromNow() }` }</div>
    );
};
