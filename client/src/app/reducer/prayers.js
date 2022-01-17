import {
    CREATE_PRAYER,
    GET_PRAYER,
    UPDATE_PRAYER,
    DELETE_PRAYER,
    CREATE_PRAYER_ERROR,
    GET_PRAYER_ERROR,
    UPDATE_PRAYER_ERROR,
    DELETE_PRAYER_ERROR
} from '../action';

const initialState = [];

function prayerReducer(prayers = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case CREATE_PRAYER:
            return [...prayers, payload]
        case CREATE_PRAYER_ERROR:
            return { error: payload }
        case GET_PRAYER:
            return payload
        case GET_PRAYER_ERROR:
            return { error: payload }
        case DELETE_PRAYER:
            return prayers.filter((pray) => pray._id !== payload._id);
        case DELETE_PRAYER_ERROR:
            return { error: payload }
        case UPDATE_PRAYER:
            return prayers.map((prayer) => {
                if(prayer?._id === payload?._id) {
                    return {
                        ...prayer,
                        ...payload
                    }
                } else {
                    return prayer
                }
            })
        case UPDATE_PRAYER_ERROR:
            return { error: payload }
        default: return prayers;
    }
}

export default prayerReducer;
