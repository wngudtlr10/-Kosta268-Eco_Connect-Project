import './ChatRoom.css';
import {useEffect, useRef, useState} from "react";
import ChatRoomMenu from "./ChatRoomMenu";
import * as SockJS from "sockjs-client";
import {Stomp} from "@stomp/stompjs";
import axios from "axios";
import DateFormat from "../../utils/chat/DateFormat";
import AuthAxios from "../../utils/axios/AuthAxios";
import {useRecoilState} from "recoil";
import {lastMsg} from "../../store/recoilState";

function ChatRoom({ onPrevBtnClick, chatRoomId }) {
    const [inputMessage, setInputMessage] = useState("");
    const [chatList, setChatList] = useState([]);
    const [chatRoomInfo, setChatRoomInfo] = useState([]);
    const [chatMemberList, setChatMemberList] = useState([]);
    const messagesEndRef = useRef(null);
    const stompClient = useRef(null);
    const [isChatRoomMenuOpen, setIsChatRoomMenuOpen] = useState(false);
    const [currentMemberId, setCurrentMemberId] = useState("");
    const [recentMsg, setRecentMsg] = useRecoilState(lastMsg);

    const handleMenuOpen = () => {
        if (isChatRoomMenuOpen === false) {
            setIsChatRoomMenuOpen(true);
        } else {
            setIsChatRoomMenuOpen(false);
        }
    }

    useEffect(() => {
        const sockJS = new SockJS('http://localhost:8080/ws');
        stompClient.current = Stomp.over(sockJS);

        stompClient.current.connect({}, function (frame) {
            console.log("Connected to chat room: " + chatRoomId);
            stompClient.current.subscribe(`/sub/api/chat-room/${chatRoomId}`, subscribeCallBack);
        })
    }, [chatRoomId]);

    const subscribeCallBack = function (message) {
        if (message.body) {
            const msg = JSON.parse(message.body);
            console.log("subscribeCallBack : " + JSON.stringify(msg));
            setChatList((chats) => [...chats, msg]);
            setRecentMsg(msg);
        }
    };

    useEffect(() => {
        axios
            .all([axios.get(`http://localhost:8080/api/chat-room/${chatRoomId}`),
                        AuthAxios.get(`http://localhost:8080/api/member/me`)])
            .then(
                axios.spread((res1, res2) => {
                    setChatRoomInfo(res1.data);
                    setChatList(res1.data.chatMessageList);
                    setChatMemberList(res1.data.chatRoomMemberList);
                    setCurrentMemberId(res2.data.memberId);
                    console.log("memberId : {}", res2.data.memberId);
                })
            )
            .catch(function (error) {
                console.error('Failed to load messages', error);
            })
    }, []);

    const msgBox = chatList.map((item, idx) => {
        if (item.member.memberId === currentMemberId) {
            return (
                <div className="msg-list-me-without" key={idx}>
                    <div className="me-without-profile">
                        {/*<div className="me-without-profile-2">{dateFormat(new Date(item.createAt))}</div>*/}
                        <div className="me-without-profile-2"><DateFormat date={item.createAt} /></div>
                    </div>
                    <div className="me-without-profile-wrapper">
                        <div className="me-without-profile-3">
                            <div className="text-wrapper-msg">{item.message}</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="msg-list-others" key={idx}>
                    <div className="others-profile-wrap">
                        <div className="div" />
                    </div>
                    <div className="others-msg-time-wrap">
                        <div className="others-profile-msg">
                            <div className="others-profile-msg-wrapper">
                                <div className="text-wrapper">{item.member.id}</div>
                            </div>
                            <div className="div-wrapper-msg-others">
                                <div className="text-wrapper-msg">{item.message}</div>
                            </div>
                        </div>
                        <div className="others-profile-time">
                            <div className="text-wrapper-3"><DateFormat date={item.createAt} /></div>
                        </div>
                    </div>
                </div>
            );
        }
    })

    function sendMessage(inputMessage, chatRoomId, memberId) {
        if (!inputMessage) {
            return ;
        }
        if (stompClient.current) {
            stompClient.current.send(`/pub/api/chat-room/${chatRoomId}`,
                {},
                JSON.stringify({
                    message: inputMessage,
                    chatRoom: { chatRoomId: chatRoomId },
                    member: { memberId: memberId }
                }));
            setInputMessage("");
        }
    }

    // 스크롤
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatList]);

    const handleOnKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage(inputMessage, chatRoomId, currentMemberId);
        }
    };

    return (
        <div className="chat-room-wrap">
            {isChatRoomMenuOpen && <ChatRoomMenu onMenuBtnClick={ handleMenuOpen } chatMemberList={ chatMemberList }
                                                 chatRoomId={ chatRoomId } currentMemberId={ currentMemberId } onPrevBtnClick={onPrevBtnClick}/>}
            <div className="chat-room-header">
                <img
                    className="prev-btn"
                    alt="Prev btn"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b319c5785a750871a7cd/img/chat-room-prev-btn.svg"
                    onClick={ onPrevBtnClick }
                />
                <div className="title">
                    <div className="title-text">{chatRoomInfo.title}</div>
                    <div className="count-user">{chatRoomInfo.userCount}</div>
                </div>
                <img
                    className="menu"
                    alt="Menu"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b319c5785a750871a7cd/img/chat-room-menu.svg"
                    onClick={ handleMenuOpen }
                />
            </div>
            <div className="chat-room-content">
                { msgBox }
                <div ref={ messagesEndRef } />
            </div>
            <div className="chat-room-footer">
                <div className="chat-room-input-msg">
                    <input className="chat-room-input-msg-2" placeholder="보낼 텍스트를 입력하세요..."
                            value={inputMessage} onChange={e => setInputMessage(e.target.value)}
                           onKeyDown={handleOnKeyDown}/>
                </div>
                <img
                    className="chat-input-button"
                    alt="Chat input button"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b319c5785a750871a7cd/img/chat-input-button.svg"
                    onClick={() => sendMessage(inputMessage, chatRoomId, currentMemberId)}
                />
            </div>
        </div>
    );
}

export default ChatRoom;