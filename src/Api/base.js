import axios from "axios"

const instances = axios.create({
    baseURL: "http://localhost/api/user"
})

export default instances