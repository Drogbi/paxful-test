import React from 'react';
import css from './TradesChatMessage.module.scss';
import { MessageModel } from '../../../../shared/types/data';
import { Avatar } from '../../../../shared/components';
import cx from 'classnames';

interface TradesChatMessageProps {
    message: MessageModel;
    isCurrentUserMessage: boolean;
}

export const TradesChatMessage: React.FC<TradesChatMessageProps> = ({ message, isCurrentUserMessage }) => {
    return (
        <div className={ cx(css.message, isCurrentUserMessage ? css.currentUser : css.tradeUser) }>
            <Avatar className={ css.avatar } title={ message.author.name } url={ message.author.avatarUrl }/>
            <div className={ css.content }>{ message.content }</div>
        </div>
    );
};
