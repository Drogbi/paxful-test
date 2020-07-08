import React, { useLayoutEffect, useRef } from 'react';
import { useTypedSelector } from '../../../../shared/hooks';
import css from './TradesChat.module.scss';
import { TradesChatMessage } from './TradesChatMessage';
import { IHaveClassname, UserModel } from '../../../../shared/types';
import { TradesChatInput } from './TradesChatInput';
import { Rating } from '../../../../shared/components';
import { useCurrentTrade } from '../shared/hooks';
import cx from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';

interface TradesChatProps extends IHaveClassname {

}

export const TradesChat: React.FC<TradesChatProps> = ({ className }) => {
    const trade = useCurrentTrade();
    const currentUser = useTypedSelector(state => state.currentUser) as UserModel;
    const scrollBarsRef = useRef<Scrollbars>(null);

    const user = trade.user;

    useLayoutEffect(() => {
        scrollBarsRef?.current?.scrollToBottom();
    }, [trade.messages.length]);

    return (
        <div className={ cx(css.chat, className) }>
            <div className={ css.header }>
                <div className={ css.product }>{ trade.product.name }</div>
                <div className={ css.userContainer }>
                    <div className={ css.user }>{ user.name }</div>
                    <Rating theme='secondary' className={ css.rating } { ...user.rating }/>
                </div>
            </div>
            { /*Scrollbars to fix ugly windows scroll */ }
            <Scrollbars ref={ scrollBarsRef }>
                <div className={ css.messages }>
                    { trade.messages.map((message) => <TradesChatMessage isCurrentUserMessage={ message.author.id === currentUser.id } message={ message }/>) }
                </div>
            </Scrollbars>
            <TradesChatInput/>
        </div>
    );
};
