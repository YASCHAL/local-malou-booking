import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://malou-booking-dz.herokuapp.com/api/"
});