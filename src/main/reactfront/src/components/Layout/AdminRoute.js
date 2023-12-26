import {GetMemberRole} from "../member/GetMemberRole";
import {Navigate} from "react-router-dom";

const AdminRoute = ({ children }) => {
    const role = GetMemberRole();

    if (role !== 'ROLE_ADMIN') {
        alert("접근 권한이 없습니다. 관리자만 접근 가능합니다.");
        return <Navigate to={"/"} replace={true} />;
    }

    return children;
}

export default AdminRoute;