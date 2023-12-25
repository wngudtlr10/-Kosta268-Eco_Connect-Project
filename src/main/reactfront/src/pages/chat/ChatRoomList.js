import './ChatRoomList.css';
import {useEffect, useState} from "react";
import DateFormat from "../../utils/chat/DateFormat";
import AuthAxios from "../../utils/axios/AuthAxios";
import {useRecoilState} from "recoil";
import {addMemberCount, createRoom, lastMsg, loginState} from "../../store/recoilState";
import ChatRoomListNull from "./ChatRoomListNull";
import ChatRoomLogin from "./ChatRoomLogin";

function ChatRoomList({ onSelectRoom, chatUserList }) {
    const [chatRooms, setChatRooms] = useState([]);
    const [recentMsg, setRecentMsg] = useRecoilState(lastMsg);
    const [create, setCreate] = useRecoilState(createRoom);
    const [count, setCount] = useRecoilState(addMemberCount);
    const [login, setLogin] = useRecoilState(loginState);


    useEffect(() => {
        AuthAxios.get(`http://localhost:8080/api/chat-room/member`)
            .then(function (res) {
                console.log("res.data : ", res.data);
                setChatRooms(res.data);
                setRecentMsg(res.data.recentMessage);
                console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        AuthAxios.get(`http://localhost:8080/api/chat-room/member`)
            .then(function (res) {
                setChatRooms(res.data);
                setRecentMsg(res.data.recentMessage);
                setCreate(false);
                setCount(false);
                console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [recentMsg, create, count]);

    const handleChatOpen = (chatRoomId) => {
        // setSelectedChatRoom(roomId);
        console.log(chatRoomId);
        onSelectRoom(chatRoomId);
    };

    return (
        !login ? <ChatRoomLogin /> :
        chatRooms.length === 0 ? <ChatRoomListNull/>
            :
        <div className="chat-room-list-index">
            <div className="chat-room-title">채팅</div>
            <div className="chat-room-list">
                {
                    chatRooms.map((chatRoom, index) => {
                        console.log(chatRoom);
                        return (
                            <div className="chat-room" key={index} id={index.toString()}
                                 onClick={() => handleChatOpen(chatRoom.chatRoomId)}>
                                <div className="chat-room-header">
                                    <div className="logo">
                                        <img
                                            className="icon-leaf"
                                            alt="Icon leaf"
                                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b21e7701c048f8af3edc/img/---icon--leaf-@2x.png"
                                        />
                                    </div>
                                </div>
                                <div className="chat-room-content">
                                    <div className="title-wrapper">
                                        <div className="text-wrapper">{chatRoom.title}</div>
                                        <div className="count-user">{chatRoom.memberCount}</div>
                                    </div>
                                    <div className="recent-msg">{chatRoom.recentMessage}</div>
                                </div>
                                <div className="chat-room-footer">
                                    {/*<div className="recent-msg-time">{chatRoom.recentMessageCreateAt}</div>*/}
                                    <div className="recent-msg-time"><DateFormat
                                        date={chatRoom.recentMessageCreateAt || ""}/></div>
                                    <div className="unread-alarm">
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ChatRoomList;