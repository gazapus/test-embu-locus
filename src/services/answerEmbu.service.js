import http from "../utils/http-common";
import authHeader from "./auth-header";

function getAll() {
    return http.get("/answerEmbu", { headers: authHeader() });
};

function get(id) {
    return http.get(`/answerEmbu/get/${id}`, { headers: authHeader() });
};

function create(data) {
    return http.post("/answerEmbu/create", data);
};

function remove(id) {
    return http.delete(`/answerEmbu/delete/${id}`, { headers: authHeader() });
};

function removeAll() {
    return http.delete(`/answerEmbu/delete`, { headers: authHeader() });
};

let methods = {
    getAll,
    get,
    create,
    remove,
    removeAll,
};

export default methods;