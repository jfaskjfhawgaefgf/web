import axios from "@/util/request";

export const getVideoList = () => {
    return axios.get('/api/getVideoList')
}

export const getUserList = () => {
    return axios.get('/api/getUserList')
}