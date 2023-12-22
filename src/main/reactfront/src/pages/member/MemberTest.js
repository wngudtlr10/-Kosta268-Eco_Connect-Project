import './MemberTest.css';
import axios from "axios";
import AuthAxios from "../../utils/axios/AuthAxios";
import {useEffect} from "react";
import Cookies from "js-cookie";

function MemberTest() {
    useEffect(() => {
        console.log(Cookies.get("XSRF-TOKEN"));
    }, [])
    const btnHandlerOne = () => {
        // axios.post(`http://localhost:8080/api/test/one`, {data: "테스트입니다."}, {withCredentials: true})
        AuthAxios.post(`/api/test/one`, {data: "테스트입니다."}, {withCredentials: true})
            .then(function (res) {
                console.log(res.data);
            })
            .catch(error => console.log(error))
    }

    const btnHandlerTwo = () => {
        // axios.post(`http://localhost:8080/api/test/one`, {data: "테스트입니다."}, {withCredentials: true})
        AuthAxios.post(`/api/test/two`, {data: "테스트입니다."}, {withCredentials: true})
            .then(function (res) {
                console.log(res.data);
            })
            .catch(error => console.log(error))
    }

    const btnCreateChatRoom = (e) => {
        const title = e.currentTarget.value;
        AuthAxios.post(`api/chat-room/title/${title}`)
            .then(function (res) {
                console.log(res.data);
            })
            .catch(error => console.log(error))
    }

    const btnEnterChatRoom = () => {

    }


    return (
        <div className={"main-test"}>
            <input/>
            <button onClick={btnHandlerOne}>post test</button>
            <button onClick={btnHandlerTwo}>@AuthenticationPrincipal test</button>
            <button onClick={btnCreateChatRoom} value={"채팅방 생성"}>채팅방 생성</button>
            <button onClick={btnEnterChatRoom}>채팅방 입장</button>
        </div>
    );
}

export default MemberTest;