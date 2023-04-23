import http from "./mainHost";
// import ITutorialData from "../types/Tutorial";

const getAll = () => {
    return http.get<Array<any>>("/");
};

const get = (cityID: any) => {
    return http.get<any>(`/${cityID}`);
};

const NameService = {
    getAll,
    get,
};

export default NameService;