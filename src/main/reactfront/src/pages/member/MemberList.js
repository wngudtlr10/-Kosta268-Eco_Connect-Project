import React, {useEffect, useState} from "react";
import Axios from "axios";

function MemberList() {
    const [member, setMember] = useState("");

    useEffect(() => {
        Axios.get("http://localhost:8080/api/members").then((response) => {
            if (response.data) {
                //회원 정보 확인용
                console.log(response.data);
                setMember(response.data);
            } else {
                alert("failed to ");
            }
        });
    }, []);

    //react + spring api tests
    const callApi = async () => {
        try {
            //axious.post 경로를 스프링 경로와 일치("httpL//localhost:8080/api/{~}
            const res = await Axios.post("http://localhost:8080/api/members");
            // callApi 함수 안에 post 요청 확인용
            console.log(res.data.test);
        } catch(e) {
            console.error("API 호출 시 오류 발생:", e);
        }
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Member Api Test</h2>
                <h1>{member.id}</h1>
                <h1>{member.name}</h1>
                <h1>{member.password}</h1>
                <h1>{member.email}</h1>
                <h1>{member.address}</h1>
                <h1>{member.profile}</h1>
                <h2>위에 데이터 안뜨면 스프링과 리액트 사이 api 경로 문제있음</h2>
            </header>
            <p className={"App-intro"}>
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
}

export default MemberList;