import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTradeMessage } from '../shared/reducers/tradesSlice';
import { handleChatInputChange } from '../shared/reducers/tradesChatSlice';
import { useTypedSelector } from '../../../../shared/hooks';
import { UserModel } from '../../../../shared/types';
import { Avatar, Switch } from '../../../../shared/components';
import { changeUser } from '../../../../shared/reducers/currentUserSlice';
import { useCurrentTrade } from '../shared/hooks';
import css from './TradesChatInput.module.scss';

interface TradesChatInputProps {
}

export const TradesChatInput: React.FC<TradesChatInputProps> = (props) => {
    const [isUserChanged, setIsUserChanged] = useState(false);
    const currentUser = useTypedSelector<UserModel>((state) => state.currentUser as UserModel);
    const myUserProfile = useTypedSelector((state) => state.myUserProfile as UserModel);
    const trade = useCurrentTrade();
    const inputValue = useTypedSelector((state) => state.tradesChat[trade.id])
    const dispatch = useDispatch();

    const clearInput = () => {
        dispatch(handleChatInputChange({ trade, inputValue: '' }));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSend();
        }
    };

    const onSend = () => {
        const { id, name, avatarUrl } = currentUser;
        if (inputValue) {
            dispatch(addTradeMessage({
                trade,
                message: { author: { id, name, avatarUrl }, content: inputValue, datetime: new Date().toISOString() }
            }));
            clearInput();
        }
    };

    const onInputChange = (e: React.ChangeEvent<{ value: string }>) => {
        dispatch(handleChatInputChange({ trade, inputValue: e.target.value }));
    }

    const onUserChange = (value: boolean) => {
        setIsUserChanged(value);
        if (value) {
            dispatch(changeUser(trade.user));
        } else {
            dispatch(changeUser(myUserProfile));
        }
    }

    return (
        <div className={ css.tradesChatInput }>
            <Avatar className={ css.avatar } url={ currentUser.avatarUrl }/>
            <Switch onChange={ onUserChange } value={ isUserChanged }/>
            <input className={ css.input } onKeyDown={ handleKeyDown } value={ inputValue || '' } onChange={ onInputChange } type="text"/>
            <button className={ css.sendButton } onClick={ onSend }>SEND</button>
        </div>
    );
};
