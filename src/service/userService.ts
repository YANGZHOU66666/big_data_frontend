import httpService from "@/service/index";

const USER_MODULE = "user";

const register = (email:string, password:string) => {
    return httpService.post(`${USER_MODULE}/register`,null, {params: {email: email, password: password}})
}

const login = (email:string, password:string) => {
    return httpService.post(`${USER_MODULE}/login`,null, {params: {email: email, password: password}})
}

const buyVIP = (userId:number) => {
    return httpService.post(`${USER_MODULE}/buyVIP`,null, {params: {id: userId}})
}

const isVIP = (userId:number) => {
    return httpService.get(`${USER_MODULE}/isVIP`, {params: {id: userId}})
}

export {
    register,
    login,
    buyVIP,
    isVIP
}