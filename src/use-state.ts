import React from "react";
import { StateStore } from "@zenstack/zen-store";

const useState = <S>(store: StateStore<S>): S => {
    const [state, setState] = React.useState(store.getState());

    React.useEffect(() => {
        return store.subscribe(setState);
    }, [store, setState]);

    return state;
};

export default useState;
