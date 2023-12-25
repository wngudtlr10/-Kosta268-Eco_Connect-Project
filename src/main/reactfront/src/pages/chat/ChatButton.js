import './ChatButton.css';
import React, { useState } from "react";
import ChatRoomList from "./ChatRoomList";
import ChatRoom from "./ChatRoom";

function ChatButton() {
    const [isChatListOpen, setIsChatListOpen] = useState(false);
    const [selectedChatRoom, setSelectedChatRoom] = useState(null);

    const handleChatListOpen = () => {
        if (isChatListOpen === false) {
            setIsChatListOpen(true);
        } else {
            setIsChatListOpen(false);
        }
    }

    const handleChatRoomClose = () => {
        setIsChatListOpen(true);
        setSelectedChatRoom(null);
    }

    const handleSelectedChatRoom = (chatRoomId) => {
        console.log(chatRoomId);
        setSelectedChatRoom(chatRoomId);
    };

    return (
        <div>
            <div className={"msg-btn-wrap"}>
                <button className={"msg-btn"} type={"button"} onClick={handleChatListOpen}>
                    {
                        isChatListOpen ?
                            <img
                                className="cxl-btn"
                                alt="Cxl btn"
                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560f0dc9a0f3702e3ebf1ec/img/cxl-btn.svg"
                            />
                            :
                            <img
                                className="msg-btn"
                                alt="Msg btn"
                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560f0dc9a0f3702e3ebf1ec/img/msg-btn.svg"
                            />

                    }
                </button>
            </div>
            {isChatListOpen && !selectedChatRoom && <ChatRoomList onSelectRoom={ handleSelectedChatRoom } />}
            {isChatListOpen && selectedChatRoom && <ChatRoom chatRoomId={ selectedChatRoom } onPrevBtnClick={ handleChatRoomClose } />}
        </div>
    );
}

export default ChatButton;