import axios from "axios";

function fetchPrayer() {
    return axios.get(`${process.env.REACT_APP_URL_PATH}/api/prayer/get`)
}

export const API = {
    fetchPrayer
}
