
import { Currency, TradeModel, TradeStatus, TradeType, UserModel } from '../shared/types';

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
                { author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' }, content: 'Hello', datetime: new Date(1,1,1,1).toISOString() },
                { author: { id: 2, name: 'Denis', avatarUrl: 'https://i.pravatar.cc/150?img=3' }, content: 'Hello', datetime: new Date(1,1,1,2).toISOString() }
            ],
            status: TradeStatus.NOT_PAID,
            tradeHash: '#dfa413F',
            startDate: new Date().toISOString(),
            user: {
                id: 1,
                name: 'Alex',
                avatarUrl: 'https://i.pravatar.cc/150?img=2',
                tradesCount: 31,
                rating: { likes: 34, dislikes: 8 }
            },
            type: TradeType.BUYING,
        },
        {
            id: 2,
            product: { id: 2, name: 'App Store Gift Card' },
            price: { value: 100, currency: Currency.USD },
            isNewMessagesAvailable: true,
            messages: [
                { author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' }, content: 'Hello', datetime: new Date(1,1,1,1).toISOString() },
                { author: { id: 2, name: 'Denis', avatarUrl: 'https://i.pravatar.cc/150?img=3' }, content: 'Hi Alex!', datetime: new Date(1,1,1,2).toISOString() },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date(1,1,1,3).toISOString()
                },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toISOString()
                },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toISOString()
                },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toISOString()
                },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toISOString()
                },
                {
                    author: { id: 1, name: 'Alex', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida nisi et molestie pretium. Praesent sed lorem a diam luctus efficitur sit amet ut diam. Nullam egestas semper libero, sit amet volutpat massa semper vel. Nulla euismod ex tellus, sit amet congue odio porta eu. Nulla nulla ex, rhoncus vitae congue non, efficitur ultricies diam. Donec maximus dignissim finibus. Nunc id fringilla velit, nec mollis neque. Aliquam aliquam libero sed risus malesuada, non vulputate purus vehicula. Suspendisse a purus a enim bibendum scelerisque sed id dui.',
                    datetime: new Date().toISOString()
                },
            ],
            status: TradeStatus.PAID,
            tradeHash: '#dfa413F',
            startDate: new Date(2020, 6, 7).toISOString(),
            user: {
                id: 1,
                name: 'Alex',
                avatarUrl: 'https://i.pravatar.cc/150?img=2',
                tradesCount: 31,
                rating: { likes: 34, dislikes: 8 }
            },
            type: TradeType.BUYING
        },
        {
            id: 3,
            product: { id: 12, name: 'iPhone 12' },
            price: { value: 2000, currency: Currency.USD },
            isNewMessagesAvailable: true,
            messages: [
                { author: { id: 10, name: 'Daniel', avatarUrl: 'https://i.pravatar.cc/150?img=11' }, content: 'Halo!', datetime: new Date(1,1,23,11).toISOString() },
                { author: { id: 2, name: 'Denis', avatarUrl: 'https://i.pravatar.cc/150?img=3' }, content: 'Hello', datetime: new Date(1,1,1,2).toISOString() }
            ],
            status: TradeStatus.NOT_PAID,
            tradeHash: '#sadfa1',
            startDate: new Date().toISOString(),
            user: {
                id: 10,
                name: 'Daniel',
                avatarUrl: 'https://i.pravatar.cc/150?img=11',
                tradesCount: 1002,
                rating: { likes: 1, dislikes: 800 }
            },
            type: TradeType.BUYING,
        },
        {
            id: 4,
            product: { id: 3, name: 'SPA Certificate' },
            price: { value: 200, currency: Currency.USD },
            isNewMessagesAvailable: true,
            messages: [
                { author: { id: 5, name: 'Ellie', avatarUrl: 'https://i.pravatar.cc/150?img=20' }, content: 'Guten morgen!', datetime: new Date(1,1,1,11, 21).toISOString() },
                { author: { id: 2, name: 'Denis', avatarUrl: 'https://i.pravatar.cc/150?img=3' }, content: 'Hello', datetime: new Date(1,1,1,2).toISOString() }
            ],
            status: TradeStatus.PAID,
            tradeHash: '#kljcx1',
            startDate: new Date().toISOString(),
            user: {
                id: 5,
                name: 'Ellie',
                avatarUrl: 'https://i.pravatar.cc/150?img=20',
                tradesCount: 2314,
                rating: { likes: 2001, dislikes: 0 }
            },
            type: TradeType.BUYING,
        },
        {
            id: 5,
            product: { id: 3, name: 'Playstation Gift Card' },
            price: { value: 20, currency: Currency.USD },
            isNewMessagesAvailable: true,
            messages: [
                { author: { id: 3, name: 'Rasmus', avatarUrl: 'https://i.pravatar.cc/150?img=5' }, content: 'Tere!', datetime: new Date(1,1,1,23, 32).toISOString() },
                { author: { id: 2, name: 'Denis', avatarUrl: 'https://i.pravatar.cc/150?img=3' }, content: 'Hello', datetime: new Date(1,1,1,2).toISOString() }
            ],
            status: TradeStatus.NOT_PAID,
            tradeHash: '#12312F',
            startDate: new Date().toISOString(),
            user: {
                id: 3,
                name: 'Rasmus',
                avatarUrl: 'https://i.pravatar.cc/150?img=5',
                tradesCount: 51,
                rating: { likes: 99, dislikes: 0 }
            },
            type: TradeType.BUYING,
        },
    ],
    currentUser: {
        id: 2,
        name: 'Denis',
        avatarUrl: 'https://i.pravatar.cc/150?img=3',
        tradesCount: 54,
        rating: { likes: 12, dislikes: 1 }
    },
    myUserProfile: {
        id: 2,
        name: 'Denis',
        avatarUrl: 'https://i.pravatar.cc/150?img=3',
        tradesCount: 54,
        rating: { likes: 12, dislikes: 1 }
    }
};
