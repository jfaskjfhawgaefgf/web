import axios from "@/util/request";

export const addVisit = (uid) => {
    return axios.get(`/api/addVisit?uid=${uid}`)
}

export const addDownload = (uid) => {
    return axios.get(`/api/addDownload?uid=${uid}`)
}