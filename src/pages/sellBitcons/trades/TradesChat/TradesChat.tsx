import React, { useEffect, useRef } from 'react';
import { useTypedSelector } from '../../../../shared/hooks';
import css from './TradesChat.module.scss';
import { useParams, useHistory } from 'react-router-dom';
import { TradesChatMessage } from './TradesChatMessage';
import { TradeModel, UserModel } from '../../../../shared/types/data';
import { TradesChatInput } from './TradesChatInput';
import { useDispatch } from 'react-redux';
import { deleteTrade } from '../tradesSlice';
import { SELL_BITCOINS_ROUTE, TRADES_NAV } from '../../../../shared/constants';
import { Button } from '../../../../shared/components';
import { useCurrentTrade } from '../hooks';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface TradesChatProps {

}

export const TradesChat: React.FC<TradesChatProps> = (props) => {
    const trade = useCurrentTrade();
    const currentUser = useTypedSelector(state => state.currentUser) as UserModel;
    const dispatch = useDispatch();
    const history = useHistory();
    const messagesRef = useRef<HTMLDivElement>(null);

    const user = trade.user;

    const onTradeDelete = () => {
        dispatch(deleteTrade(trade.id));
        history.push(`${ SELL_BITCOINS_ROUTE }${ TRADES_NAV }`);
    };

    useEffect(() => {
        messagesRef?.current?.scrollTo({
            top: messagesRef?.current.scrollHeight,
            behavior: 'smooth'
        })
    }, [trade.messages.length])

    return (
        <div className={ css.chat }>
            <div className={ css.header }>
                <div className={ css.product }>{ trade.product.name }</div>
                <div className={ css.user }>{ `${ user.name } +${ user.rating.likes } / -${ user.rating.dislikes }` } </div>
                <Button className={ css.deleteButton } onClick={ onTradeDelete } icon={ faTrashAlt }/>
            </div>
            <div ref={ messagesRef } className={ css.messages }>
                { trade.messages.map((message) => <TradesChatMessage isCurrentUserMessage={ message.author.id === currentUser.id } message={ message }/>) }
            </div>
            <TradesChatInput/>
        </div>
    );
};
