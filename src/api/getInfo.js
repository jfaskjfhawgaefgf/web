import axios from "@/util/request";

export const getVideoList = () => {
    return axios.get('/api/getVideoList')
}

export const getUserList = () => {
    return axios.get('/api/getUserList')
}

export const getVideoInfo = (uid) => {
    return axios.get(`/api/getVideo?uid=${uid}`)
}