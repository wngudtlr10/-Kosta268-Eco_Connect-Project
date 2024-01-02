import axios from "axios";
import Cookies from "js-cookie";

const AuthAxios = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080',
});

AuthAxios.interceptors.request.use((config) => {
   const accessToken = localStorage.getItem("accessToken");

   if (accessToken) {
       config.headers["Authorization"] = `Bearer ${accessToken}`;
   }

   return config;
}, (error) => {
    return Promise.reject(error);
});

AuthAxios.interceptors.response.use((response) => {
    if (response.status === 404) {
        console.log('404 페이지 연결...');
    }

    return response;
}, (error) => {
    const originalRequest = error.config;
    if (error.response) {
        // if (error.response.status === 401 && !originalRequest._retry) {
        if (!originalRequest._retry) {
            originalRequest._retry = true;
            return axios.post(`http://localhost:8080/api/member/reissue`, {accessToken : localStorage.getItem("accessToken")}, {headers: {'Authorization': `Bearer ${localStorage.getItem("accessToken")}`}})
                        .then(res => {
                            if (res.status === 200) {
                                const access_token = res.data.accessToken;
                                console.log('[axios]success new token receive : ' + access_token);
                                localStorage.setItem('accessToken', access_token);
                                originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
                                return AuthAxios(originalRequest);
                            }
                        })
                        .catch(err => {
                            console.log('토큰 재발급 중 에러가 발생했습니다.');
                            console.log(err);
                            return Promise.reject(error);
                        });
        } else {
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
});

export default AuthAxios;