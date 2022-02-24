import React from "react";
import { Provider } from "react-redux";
import configureMockStore  from "redux-mock-store";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import PhoneDetail from "../components/phone.component";
import { initState } from "../store/reducers/phoneReducer";

describe('PhoneDetail component', () => {
    const createMockStore = configureMockStore({ phones: initState });
    let mockStore;

    beforeEach(() => {
        mockStore = createMockStore({ phones: initState });
    })

    it('should redirect to /phones', () => {
        const wrapper = shallow(
            <Provider store={mockStore}>
                <PhoneDetail />
            </Provider>);

        console.log(wrapper.exists('div'))
        expect(toJson(wrapper.dive())).toMatchSnapshot();
        expect(wrapper.exists('.card')).toBe(false);
    });
});
