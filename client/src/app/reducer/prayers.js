import { CREATE_PRAYER, GET_PRAYER, UPDATE_PRAYER, DELETE_PRAYER } from '../action';

const initialState = [];

function prayerReducer(prayers = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case CREATE_PRAYER:
            return [...prayers, payload]
        case GET_PRAYER:
            return payload
        case DELETE_PRAYER:
            return prayers.filter((pray) => pray._id !== payload._id);
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
        default: return prayers;
    }
}

export default prayerReducer;
