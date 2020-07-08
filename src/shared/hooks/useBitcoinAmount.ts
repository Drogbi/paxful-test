import { useTypedSelector } from './useTypedSelector';
import { CurrencyAmountModel } from '../types';

const getBitcoinAmount = (value: number, bitcoinPrice: number) => (value / bitcoinPrice).toFixed(8);

type UseBitcoinAmount = (currencyAmount: CurrencyAmountModel) => { value: string, isLoading: boolean };

export const useBitcoinAmount: UseBitcoinAmount = (price) => {
    const bitcoinPrice = useTypedSelector((state) => state.bitcoinPrice);

    const bitcoinAmount = getBitcoinAmount(price.value, bitcoinPrice.prices[price.currency]);
    return { value: bitcoinAmount, isLoading: bitcoinPrice.isLoading };
};

