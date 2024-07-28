import { StoreConstants } from '@constants';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorage } from '@utils/local-storage.utils';

type CounterState = {
  value: number;
};

const COUNTER_STORAGE_KEY = 'counter';

const initialState: CounterState = {
  value: LocalStorage.getItem(COUNTER_STORAGE_KEY) ?? 0,
};

const saveCounter = (value: number) => {
  LocalStorage.setItem(COUNTER_STORAGE_KEY, value);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const counterSlice = createSlice({
  name: StoreConstants.COUNTER,
  initialState,
  selectors: {
    selectCount: (state) => state.value,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
      saveCounter(state.value);
    },
    decrement: (state) => {
      state.value -= 1;
      saveCounter(state.value);
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      saveCounter(state.value);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const { selectCount } = counterSlice.selectors;

export default counterSlice.reducer;
