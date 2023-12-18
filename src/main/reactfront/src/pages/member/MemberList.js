import React, {useEffect, useState} from "react";
import Axios from "axios";

function MemberList() {
    const [member, setMember] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        Axios.get("http://localhost:8080/api/members")
            .then((response) => {
                if (response.data) {
                    //회원 정보 확인용
                    console.log(response.data);
                    setMember(response.data);
                } else {
                    setError("failed to fetch data");
                }
            })
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="App">
            <header className="App-header">
                <h2>Member Api Test</h2>
                <h1>{member.id}</h1>
                <h1>{member.name}</h1>
                <h1>{member.address}</h1>
                <h1>{member.email}</h1>
                <h2>위에 데이터 안뜨면 스프링과 리액트 사이 api 경로 문제있음</h2>
            </header>
            <p className={"App-intro"}>
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );
}

export default MemberList;