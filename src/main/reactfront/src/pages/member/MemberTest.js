import './MemberTest.css';
import axios from "axios";
import AuthAxios from "../../utils/axios/AuthAxios";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {addMemberCount, createRoom} from "../../store/recoilState";
import {useRecoilState} from "recoil";

function MemberTest() {
    const [inputChatRoomName, setInputChatRoomName] = useState("");
    const [inputChatRoomId, setInputChatRoomId] = useState("");
    const [create, setCreate] = useRecoilState(createRoom);
    const [count, setCount] = useRecoilState(addMemberCount);

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

    const onChatRoomNameHandler = (e) => {
        const chatRoomName = e.currentTarget.value;
        setInputChatRoomName(chatRoomName);
    }

    const btnCreateChatRoom = (e) => {
        const title = inputChatRoomName;
        AuthAxios.post(`api/chat-room/title/${title}`)
            .then(function (res) {
                console.log(res.data);
                setCreate(true);
            })
            .catch(error => console.log(error))
    }

    const onChatRoomIdHandler = (e) => {
        const chatRoomId = e.currentTarget.value;
        setInputChatRoomId(chatRoomId);
    }


    const btnEnterChatRoom = () => {
        const chatRoomId = inputChatRoomId;
        AuthAxios.post(`api/chat-room/${chatRoomId}/member`)
            .then(function (res) {
                console.log(res.data);
                setCount(true);
            })
            .catch(error => console.log(error))
    }


    return (
        <div className={"main-test"}>
            <input/>
            <button onClick={btnHandlerOne}>post test</button>
            <button onClick={btnHandlerTwo}>@AuthenticationPrincipal test</button>
            <input onChange={onChatRoomNameHandler}/>
            <button onClick={btnCreateChatRoom}>채팅방 생성</button>
            <input onChange={onChatRoomIdHandler}/>
            <button onClick={btnEnterChatRoom}>채팅방 입장</button>
        </div>
    );
}

export default MemberTest;