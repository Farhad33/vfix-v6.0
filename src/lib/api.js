import axios from 'axios'

export const strapiBaseURL = 'https://strapi.myvfix.com'
export const VFixBackendURL = process.env.NEXT_PUBLIC_BACKEND || 'https://myvfix.com/api'

export const strapiAPI = axios.create({
    baseURL: 'https://strapi.myvfix.com/api',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'bearer 6a75f708ddbaf39f6e50a214cf951876812b2cfcda2942d68cf111fef25068148cce832d6736dc1ea05d9e6b2566b75322c348c378a07a898b005cee24149b4b013507f273740117c7ac51ac1849724f8efa7a56d4ccb916010125d1dd666e0571bfaa74f24ad9bc726ce18ad4ca27be574c8f89209a165bd042a83f6dd1d82d'
    }
})

const token = "bearer 6a75f708ddbaf39f6e50a214cf951876812b2cfcda2942d68cf111fef25068148cce832d6736dc1ea05d9e6b2566b75322c348c378a07a898b005cee24149b4b013507f273740117c7ac51ac1849724f8efa7a56d4ccb916010125d1dd666e0571bfaa74f24ad9bc726ce18ad4ca27be574c8f89209a165bd042a83f6dd1d82d"
export const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token 
    }
})

const isBrowser = typeof window !== 'undefined';

export const getToken = () => {
    if(isBrowser) {
        let jwt = sessionStorage.getItem("jwt");
        return jwt
    }
    return ``
}

export const authAPI = () => axios.create({
    baseURL: VFixBackendURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${getToken()}`
    }
})