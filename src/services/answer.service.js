import http from "../utils/http-common";
import authHeader from "./auth-header";

function getAll() {
    return http.get("/answer", { headers: authHeader() });
};

function get(id) {
    return http.get(`/answer/get/${id}`, { headers: authHeader() });
};

function check(alias) {
    return http.get(`/answer/check/${alias}`);
};

function create(data) {
    return http.post("/answer/create", data);
};

function remove(id) {
    return http.delete(`/answer/delete/${id}`, { headers: authHeader() });
};

function removeAll() {
    return http.delete(`/answer/delete`, { headers: authHeader() });
};

let methods = {
    getAll,
    get,
    create,
    remove,
    removeAll,
    check
};

export default methods;