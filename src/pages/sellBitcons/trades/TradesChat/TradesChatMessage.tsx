import React from 'react';
import css from './TradesChatMessage.module.scss';
import { MessageModel } from '../../../../shared/types';
import { Avatar } from '../../../../shared/components';
import cx from 'classnames';
import moment from 'moment';

interface TradesChatMessageProps {
    message: MessageModel;
    isCurrentUserMessage: boolean;
}

export const TradesChatMessage: React.FC<TradesChatMessageProps> = React.memo(({ message, isCurrentUserMessage }) => {
    return (
        <div className={ cx(css.message, isCurrentUserMessage ? css.currentUser : css.tradeUser) }>
            <Avatar className={ css.avatar } title={ message.author.name } url={ message.author.avatarUrl }/>
            <div className={ css.contentContainer }>
                <div className={ css.content }>{ message.content }</div>
                <div className={ css.time }>{ moment(message.datetime).format('h:mm a') }</div>
            </div>
        </div>
    );
});
