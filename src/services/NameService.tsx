import http from "./mainHost";
// import ITutorialData from "../types/Tutorial";

const getAll = () => {
    return http.get<Array<any>>("/");
};

const get = (ibgeCityID: any) => {
    return http.get<any>(`/${ibgeCityID}`);
};
//
// const create = (data: ITutorialData) => {
//     return http.post<ITutorialData>("/tutorials", data);
// };
//
// const update = (id: any, data: ITutorialData) => {
//     return http.put<any>(`/tutorials/${id}`, data);
// };
//
// const remove = (id: any) => {
//     return http.delete<any>(`/tutorials/${id}`);
// };
//
// const removeAll = () => {
//     return http.delete<any>(`/tutorials`);
// };
//
// const findByTitle = (title: string) => {
//     return http.get<Array<ITutorialData>>(`/tutorials?title=${title}`);
// };

const TutorialService = {
    getAll,
    get,
    // create,
    // update,
    // remove,
    // removeAll,
    // findByTitle,
};

export default TutorialService;