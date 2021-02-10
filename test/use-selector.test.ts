import {act, renderHook} from '@testing-library/react-hooks'
import { createStateStore } from "@zenstack/zen-store";
import useSelector from "../src/use-selector";

describe('useSelector', () => {
    it('should return applied selector on store current state', () => {
        const state = 0;
        const selector = (state: number) => state + 5;
        const store = createStateStore(state);
        const { result } = renderHook(() => useSelector(store, selector));
        expect(result.current).toBe(5);
    });

    it('should return applied selector on store updated state', () => {
        const state = 0;
        const nextState = 1;
        const selector = (state: number) => state + 5;
        const store = createStateStore(state);
        const { result } = renderHook(() => useSelector(store, selector));
        act(() => {
            store.setState(nextState)
        });
        expect(result.current).toBe(6);
    });
});
