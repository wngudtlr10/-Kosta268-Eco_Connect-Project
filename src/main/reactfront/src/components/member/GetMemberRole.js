import {jwtDecode} from "jwt-decode";

export const GetMemberRole = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
        return null;
    }

    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.auth;
    } catch (error) {
        console.error("토큰 디코딩 실패", error);
        return null;
    }
}