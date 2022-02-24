import React from "react";
import { Provider } from "react-redux";
import configureMockStore  from "redux-mock-store";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import PhoneListContainer from "../components/phone-list.component";
import { initState } from "../store/reducers/phoneReducer";

describe('PhoneDetail component', () => {
    const createMockStore = configureMockStore({ phones: initState });
    let mockStore;

    beforeEach(() => {
        mockStore = createMockStore({ phones: initState });
    })

    it('should redirect to /phones', () => {
        const phoneDetails = shallow(
            <Provider store={mockStore}>
                <PhoneListContainer />
            </Provider>)
            .dive()
        const instance = phoneDetails.instance();

        expect(toJson(phoneDetails)).toMatchSnapshot();
    });
});
