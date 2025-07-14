import axios from "axios"


const API_url = "http://localhost:4000";

export const login = async (data) => {
    try {
        const reply = await axios.post(`${API_url}/login`, data);
        // console.log("reply", reply);
        return reply.data;
    }
    catch (err) {
        console.log(err)
    }
}

export const signup = async (data) => {
    try {
        const reply = await axios.post(`${API_url}/reg`, data);
        console.log(reply, "reply")
        return reply.data
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