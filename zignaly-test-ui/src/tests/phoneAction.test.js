import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../store/reducers/rootReducer";
import { initState } from "../store/reducers/phoneReducer";
import { setPhones, selectPhone } from "../store/actions/phone.action";

describe('phoneAction', () => {
    let store;

    beforeEach(() => {
        store = createStore(rootReducer, applyMiddleware(thunk));
    })

    it('handles SET_PHONES action', () => {

        const phones = [
            {
                id: 1,
                model: "Phone model",
            }
        ];

        const expectedState = {
            ...initState,
            selectedPhone: null,
            phones
        };

        store.dispatch(setPhones(phones));
        const actualState = store.getState().phones;
        expect(actualState).toEqual(expectedState);
    });

    it('handles SELECT_PHONE action', () => {
        const selectedPhone = { id: 1, model: 'Phone model' };
        const expectedState = { ...initState, selectedPhone };

        store.dispatch(selectPhone(selectedPhone));
        const actualState = store.getState().phones;
        expect(actualState).toEqual(expectedState);
    });
});