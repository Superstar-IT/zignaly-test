import { createStore } from "redux";

import rootReducer from "../store/reducers/rootReducer";
import { initState } from "../store/reducers/phoneReducer";

describe('rootReducer', () => {
    it('has necessary reducers injected', () => {
        const store = createStore(rootReducer);
        expect(store.getState().phones).toEqual(initState);
    });
});
