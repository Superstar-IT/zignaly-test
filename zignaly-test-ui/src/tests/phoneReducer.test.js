import { initState, phoneReducer as reducer } from "../store/reducers/phoneReducer";
import * as types from "../store/types";

describe('phoneReducer', () => {
    it('handles SET_PHONES action', () => {
        const phones = [{ id: 1, model: 'Phone model' }];
        const expectedState = { ...initState, phones };
        const actualState = reducer(initState, { type: types.SET_PHONES, phones });

        expect(actualState).toEqual(expectedState);
    });

    it('handles SELECT_PHONE action', () => {
        const selectedPhone = { id: 1, model: 'Phone model' };
        const expectedState = { ...initState, selectedPhone };
        const actualState = reducer(initState, { type: types.SELECT_PHONE, phone: selectedPhone });

        expect(actualState).toEqual(expectedState);
    });
});