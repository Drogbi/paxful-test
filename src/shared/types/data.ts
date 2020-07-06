export interface UserModel {
    id: number;
    name: string;
    avatarUrl?: string;
    tradesCount: number;
    amountBalance: { currency: Currency, value: number }
    rating: { likes: number, dislikes: number }
}

export interface MessageModel {
    author: Pick<UserModel, 'id' | 'name' | 'avatarUrl'>,
    content: string,
    datetime: string
}

export interface TradeModel {
    id: number;
    product: { id: number, name: string };
    price: { currency: Currency, value: number };
    type: TradeType;
    status: TradeStatus;
    user: UserModel;
    messages: MessageModel[];
    isNewMessagesAvailable: boolean;
    tradeHash: string;
    startDate: string;
}

export interface InitialDataModel {
    trades: TradeModel[];
    currentUser: UserModel;
}

export enum Currency {
    USD = "USD",
    EUR = "EUR"
}

export enum TradeStatus {
    PAID = 'PAID',
    NOT_PAID = 'NOT PAID'
}

export enum TradeType {
    BUYING = 'BUYING',
    SELLING = 'SELLING'
}
