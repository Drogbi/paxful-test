import { Currency, TradeModel, TradeStatus, TradeType, UserModel } from './shared/types/data';

interface InitialDataModel {
    trades: TradeModel[];
    currentUser: UserModel;
    myUserProfile: UserModel;
}


export const initialData: InitialDataModel = {
    trades: [
        {
            id: 1,
            product: { id: 1, name: 'Amazon Gift Card' },
            price: { value: 65, currency: Currency.USD },
            isNewMessagesAvailable: true,
            messages: [
                { author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' }, content: 'Hello', datetime: new Date().toDateString() },
                { author: { id: 2, name: 'Denis', avatarUrl: 'https://i.pravatar.cc/150?img=3' }, content: 'Hello', datetime: new Date().toDateString() }
            ],
            status: TradeStatus.NOT_PAID,
            tradeHash: '#dfa413F',
            startDate: new Date().toDateString(),
            user: {
                id: 1,
                name: 'Alex',
                amountBalance: { currency: Currency.USD, value: 100 },
                avatarUrl: 'https://i.pravatar.cc/150?img=2',
                tradesCount: 31,
                rating: { likes: 34, dislikes: 8 }
            },
            type: TradeType.BUYING,
        },
        {
            id: 2,
            product: { id: 1, name: 'App Store Gift Card' },
            price: { value: 100, currency: Currency.USD },
            isNewMessagesAvailable: true,
            messages: [
                { author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' }, content: 'Hello', datetime: new Date().toDateString() },
                { author: { id: 2, name: 'Denis', avatarUrl: 'https://i.pravatar.cc/150?img=3' }, content: 'Hi Alex!', datetime: new Date().toDateString() },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toDateString()
                },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toDateString()
                },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toDateString()
                },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toDateString()
                },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toDateString()
                },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toDateString()
                },
            ],
            status: TradeStatus.PAID,
            tradeHash: '#dfa413F',
            startDate: new Date().toDateString(),
            user: {
                id: 1,
                name: 'Alex',
                avatarUrl: 'https://i.pravatar.cc/150?img=2',
                amountBalance: { currency: Currency.USD, value: 100 },
                tradesCount: 31,
                rating: { likes: 34, dislikes: 8 }
            },
            type: TradeType.BUYING
        }
    ],
    currentUser: {
        id: 2,
        name: 'Denis',
        amountBalance: { currency: Currency.USD, value: 321 },
        avatarUrl: 'https://i.pravatar.cc/150?img=3',
        tradesCount: 54,
        rating: { likes: 12, dislikes: 1 }
    },
    myUserProfile: {
        id: 2,
        name: 'Denis',
        amountBalance: { currency: Currency.USD, value: 321 },
        avatarUrl: 'https://i.pravatar.cc/150?img=3',
        tradesCount: 54,
        rating: { likes: 12, dislikes: 1 }
    }
};
