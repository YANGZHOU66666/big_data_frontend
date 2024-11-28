import httpService from "@/service/index";

const PAPER_MODULE = "paper";

const searchPaper = (key: string) => {
    return httpService.post(`${PAPER_MODULE}/searchPaper`, null, { params: { key:key } });
}

const getPaperBase = (id: number) => {
    return httpService.post(`${PAPER_MODULE}/getPaperBase`,null, { params: { id:id } });
}

const getCitedPaper = (id: number) => {
    return httpService.get(`${PAPER_MODULE}/getCitedPaper`,{ params: { id:id } });
}

const getHomogeneousPaper = (id: number) => {
    return httpService.get(`${PAPER_MODULE}/getHomogeneousPaper`,{ params: { id:id } });
}

const getSimilarPaper = (id: number) => {
    return httpService.get(`${PAPER_MODULE}/getSimilarPaper`,{ params: { id:id } });
}
export {
    searchPaper,
    getPaperBase,
    getCitedPaper,
    getHomogeneousPaper,
    getSimilarPaper
}