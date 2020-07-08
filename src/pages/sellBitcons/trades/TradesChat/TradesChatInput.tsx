import React, { useEffect, useState } from 'react';
import css from './TradesChatInput.module.scss';
import { useDispatch } from 'react-redux';
import { addTradeMessage } from '../shared/reducers/tradesSlice';
import { useTypedSelector, useValue } from '../../../../shared/hooks';
import { UserModel } from '../../../../shared/types';
import { Avatar, Switch } from '../../../../shared/components';
import { changeUser } from '../../../../shared/reducers/currentUserSlice';
import { useCurrentTrade } from '../shared/hooks';

interface TradesChatInputProps {
}

export const TradesChatInput: React.FC<TradesChatInputProps> = (props) => {
    const [inputValue, setInputValue] = useState('');
    const isUserChanged = useValue(false);
    const currentUser = useTypedSelector<UserModel>((state) => state.currentUser as UserModel);
    const myUserProfile = useTypedSelector((state) => state.myUserProfile as UserModel);
    const trade = useCurrentTrade();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isUserChanged.value) {
            dispatch(changeUser(trade.user));
        } else {
            dispatch(changeUser(myUserProfile));
        }
    }, [isUserChanged.value]);

    const clearInput = () => {
        setInputValue('');
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

    return (
        <div className={ css.tradesChatInput }>
            <Avatar className={ css.avatar } url={ currentUser.avatarUrl }/>
            <Switch { ...isUserChanged } value={ currentUser.id !== myUserProfile.id }/>
            <input className={ css.input } onKeyDown={ handleKeyDown } value={ inputValue } onChange={ (e) => setInputValue(e.target.value) } type="text"/>
            <button className={ css.sendButton } onClick={ onSend }>SEND</button>
        </div>
    );
};
