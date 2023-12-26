import './ChatRoomMenu.css';
import AuthAxios from "../../utils/axios/AuthAxios";
import {useRecoilState} from "recoil";
import {leaveRoom} from "../../store/recoilState";

function ChatRoomMenu({ onMenuBtnClick, chatMemberList, chatRoomId, currentMemberId, onPrevBtnClick }) {
    const [leave, setLeave] = useRecoilState(leaveRoom);

    const handleLeaveChat = (chatRoomId, onPrevBtnClick) => {
        let result = window.confirm("채팅방에서 나가시겠습니까?");

        if (result) {
            AuthAxios.delete(`http://localhost:8080/api/chat-room/${chatRoomId}/member`)
                .then(function (res) {
                    setLeave(true);
                    onPrevBtnClick();
                    console.log(res.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    };

    return (
        <div className="chat-room-menu-index">
            <div className="chat-menu-header">
                <div className="chat-menu-header-text">대화 상대</div>
                <img
                    className="chat-room-menu"
                    alt="Chat room menu"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6560b319c5785a750871a7cd/img/chat-room-menu.svg"
                    onClick={ onMenuBtnClick }
                />
            </div>
            <div className="chat-room-menu-content">
                {
                    [...chatMemberList].sort((a, b) => {
                        if(a.member.memberId === currentMemberId) return -1;
                        if(b.member.memberId === currentMemberId) return 1;
                        return 0;
                    }).map((chatMember, index) => {
                        return (
                            <div className="chat-room-menu-user" key={index}>
                                <div className="chat-room-user">
                                    <div className="chat-room-user-img" />
                                </div>
                                <div className="chat-room-user-wrapper">
                                    {
                                        chatMember.member.memberId === currentMemberId ?
                                        <div className="chat-room-user-text">(나) {chatMember.member.id}</div>
                                        :
                                        <div className="chat-room-user-text">{chatMember.member.id}</div>
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="chat-room-menu-footer">
                <img
                    className="chat-room-menu-exit"
                    alt="chat-room-menu-exit"
                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/6586a53257842a83dc5eacbb/img/---icon--exit-outline-@2x.png"
                    onClick={ () => handleLeaveChat(chatRoomId, onPrevBtnClick) }
                />
            </div>
        </div>
    );
}

export default ChatRoomMenu;