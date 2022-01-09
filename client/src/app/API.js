import axios from "axios";

function fetchPrayer() {
    return axios.get(`${process.env.REACT_APP_URL_PATH}/api/prayer/get`)
}

async function fetchSinglePrayer(id) {
    try {
        const response = await axios.get(`${process.env.REACT_APP_URL_PATH}/api/prayer/get-single/${id}`)
        return response.data;
    } catch(error) {
        console.log(error);
    }
}

export const API = {
    fetchPrayer,
    fetchSinglePrayer
}
