import './ChatRoomLogin.css';

function ChatRoomLogin() {
    const handleLoginBtn =  () => {
        window.location.href = `http://localhost:3000/login`;
    }

    return (
        <div className="chat-room-login-index">
            <div className="chat-room-title">채팅</div>
            <div className="chat-room-list">
                <div className="chat-room">
                    <div className="chat-room-header">
                        <div className="logo">
                            <img
                                className="icon-leaf"
                                alt="Icon leaf"
                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/65883d9dba8947bb515ff31b/img/---icon--leaf-@2x.png"
                            />
                        </div>
                    </div>
                    <div className="chat-room-content">
                        <p className="text-wrapper">
                            로그인이 필요한 서비스 입니다.
                            <br />
                            로그인 후 이용해 주세요.
                        </p>
                    </div>
                    <button className="login-button" onClick={handleLoginBtn}>
                        로그인 하러가기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatRoomLogin;