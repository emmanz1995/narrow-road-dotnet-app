import { CREATE_PRAYER, GET_PRAYER, DELETE_PRAYER } from './index';
import axios from 'axios';
import { API } from '../API';

export const onCreatePrayer = (formData) => async (dispatch) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_URL_PATH}/api/prayer/create`, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        dispatch({
            type: CREATE_PRAYER,
            payload: response.data
        })
    } catch(error) {
        console.log(error);
    }
}

export const getPrayers = () => async (dispatch) => {
    try {
        const response = await API.fetchPrayer()
        dispatch({
            type: GET_PRAYER,
            payload: response?.data
        })
    } catch(error) {
        console.log(error.message);
    }
}

export const deletePrayer = (id) => async (dispatch) => {
    try {
        const response = await axios.delete(`${process.env.REACT_APP_URL_PATH}/api/prayer/delete/${id}`)
        dispatch({
            type: DELETE_PRAYER,
            payload: response?.data
        })
        console.log(response?.data)
    } catch(error) {
        console.log(error.message);
    }
}



