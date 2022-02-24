import * as TYPES from "../types";

export const setPhones = (phones) => dispatch => {
    dispatch({
        type: TYPES.SET_PHONES,
        phones
    });
}

export const selectPhone = (phone) => dispatch => {
    dispatch({
        type: TYPES.SELECT_PHONE,
        phone
    })
}