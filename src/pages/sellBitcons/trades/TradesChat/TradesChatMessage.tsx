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
        <div className={ cx(css.message, isCurrentUserMessage && css.currentUserMessage) }>
            <div className={ css.content }>{ message.content }</div>
            <Avatar title={ message.author.name } url={ message.author.avatarUrl }/>
        </div>
    );
};
