import { renderHook, act } from '@testing-library/react-hooks'
import { createStateStore } from "@zenstack/zen-store";
import useState from "../src/use-state";

describe('useState', () => {
    it('should bind with the current state of the store', () => {
        const state = Symbol('some state');
        const store = createStateStore(state);
        const { result } = renderHook(() => useState(store));
        expect(result.current).toBe(state);
    });

    it('should emit a new state if the store updated', () => {
        const state = 0;
        const nextState = 1;
        const store = createStateStore(state);
        const { result } = renderHook(() => useState(store));
        act(() => {
            store.setState(nextState)
        });
        expect(result.current).toBe(nextState);
    });
});
