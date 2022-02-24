import { createStore } from "redux";
import { getPhones, getSelectedPhone } from "../store/selectors/phone.selector";
import rootReducer from "../store/reducers/rootReducer";
import { initState } from "../store/reducers/phoneReducer";

describe('rootReducer', () => {
    let store;
    
    beforeEach(() => {
        store = createStore(rootReducer);
    });

    it('should returns phone list', () => {
        const expectedState = initState.phones;
        const actualState = getPhones(store.getState());

        expect(actualState).toEqual(expectedState);
    });

    it('should returns selected phone', () => {
        const expectedState = initState.selectedPhone;
        const actualState = getSelectedPhone(store.getState());

        expect(actualState).toEqual(expectedState);
    });
});
