import './ChatRoomListNull.css';

function ChatRoomListNull() {
    return (
        <div className="chat-room-list-null-index">
            <div className="chat-room-title">채팅</div>
            <div className="chat-room-list-null">
                <div className="chat-room-header">
                    <div className="logo">
                        <img
                            className="icon-leaf"
                            alt="Icon leaf"
                            src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65882ebf267d880a66d3d91e/img/---icon--leaf-@2x.png"
                        />
                    </div>
                </div>
                <div className="chat-room-null-content">
                    <p className="text-wrapper">
                        아직 참여 중인 채팅방이 없어요.
                        <br />
                        다양한 활동에 참여하고, 새로운 사람들과의 소통을 시작해보는 건 어떨까요?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ChatRoomListNull;