import axios from "axios"

const API_url = "http://localhost:4000";

export const login = async (data) => {
    try {
        const reply = await axios.post(`${API_url}/user/login`, data);
        return reply.data;
    }
    catch (err) {
        console.log(err)
    }
}

export const signup = async (data) => {
    try {
        const reply = await axios.post(`${API_url}/user/signup`, data);
        console.log(reply, "reply")
        return reply.data
    }
    catch (err) {
        console.log(err)
    }
}

export const rating = async (data) => {
    try {
        const rate = await axios.post(`${API_url}/user/rating`, data)
        return rate.data
    }
    catch (err) {
        console.log(err)
    }
}

export const Enquiry = async (data) => {
    try {
        const Enquirydata = await axios.post(`${API_url}/user/Enquiry`, data)
        return Enquirydata.data
    }
    catch (err) {
        console.log(err)
    }
}

export const search = async (data) => {
    try {
        const searchdata = await axios.get(`${API_url}/user/search`, data)
        return searchdata.data
    }
    catch (err) {
        console.log(err)
    }
}

export const order = async (data) => {
    try {
        const orderdata = await axios.post(`${API_url}/user/order`, data)
        return orderdata.data
    }
    catch (err) {
        console.log(err)
    }
}

export const cart = async (data) => {
    try {
        const cartdata = await axios.post(`${API_url}/user/order`, data)
        return cartdata.data
    }
    catch (err) {
        console.log(err)
    }
}

const token = localStorage.getItem("token")
console.log("token", token)
const tokenvalue = axios.create({
    baseURL: API_url,
    headers: { Authorization: `Bearer ${token}` }
})

export const getvalue = async () => {
    try {
        const response = await tokenvalue.get(`${API_url}/parms`)
        console.log("response", response)
        return response.data
    }
    catch (err) {
        console.log(err)
    }
} 