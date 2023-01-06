import axios from "axios";
let getUrl = window.location;



let Api = axios.create({
    //baseURL: getUrl.protocol + "//" + getUrl.host + "/api",
    baseURL: "http://localhost/api",
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        "Accept-Language": localStorage.getItem("token") || "ar",
    },
});
Api.interceptors.request.use(function(config) {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
});
Api.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
            location.href = "#/login";
        }
    }
);

export default Api;