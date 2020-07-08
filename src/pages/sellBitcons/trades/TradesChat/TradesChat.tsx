import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useTypedSelector } from '../../../../shared/hooks';
import css from './TradesChat.module.scss';
import { useHistory } from 'react-router-dom';
import { TradesChatMessage } from './TradesChatMessage';
import { IHaveClassname, UserModel } from '../../../../shared/types';
import { TradesChatInput } from './TradesChatInput';
import { useDispatch } from 'react-redux';
import { deleteTrade } from '../tradesSlice';
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../../../shared/constants';
import { Button } from '../../../../shared/components';
import { useCurrentTrade } from '../hooks';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

interface TradesChatProps extends IHaveClassname {

}

export const TradesChat: React.FC<TradesChatProps> = ({ className }) => {
    const trade = useCurrentTrade();
    const currentUser = useTypedSelector(state => state.currentUser) as UserModel;
    const messagesRef = useRef<HTMLDivElement>(null);

    const user = trade.user;

    useLayoutEffect(() => {
        messagesRef?.current?.scrollTo({
            top: messagesRef?.current.scrollHeight,
        })
    }, [trade.messages.length])

    return (
        <div className={ cx(css.chat, className) }>
            <div className={ css.header }>
                <div className={ css.product }>{ trade.product.name }</div>
                <div className={ css.user }>{ `${ user.name } +${ user.rating.likes } / -${ user.rating.dislikes }` } </div>
            </div>
            <div ref={ messagesRef } className={ css.messages }>
                { trade.messages.map((message) => <TradesChatMessage isCurrentUserMessage={ message.author.id === currentUser.id } message={ message }/>) }
            </div>
            <TradesChatInput/>
        </div>
    );
};
