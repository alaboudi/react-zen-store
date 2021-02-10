import { StateStore } from "@zenstack/zen-store";
import useState from "./use-state";

interface Selector <S>{
    (state: S): any;
}

const useSelector = <S>(store: StateStore<S>, selector: Selector<S>) => {
    const state = useState(store);
    return selector(state);
}

export default useSelector;
