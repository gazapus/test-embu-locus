import http from "../utils/http-common";

function getAll() {
    return http.get("/question");
};

let methods = {
    getAll
};

export default methods;