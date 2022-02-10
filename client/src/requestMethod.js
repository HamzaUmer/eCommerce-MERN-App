import axios from "axios";

const BASE_URL = "http://localhost:5000/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWU0MmEzYzAxYzQzZjVlNjZmNTdkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODc4NTI0MSwiZXhwIjoxNjM5MDQ0NDQxfQ.GNI-65LbNTI8dAHuvVsltUx0OraZpfYnKLLoDOdKdwU"


export const publicReq = axios.create({
    baseURL: BASE_URL,
});

export const userReq = axios.create({
    baseURL: BASE_URL,
    header: {token : `Bearer ${TOKEN}`},
});