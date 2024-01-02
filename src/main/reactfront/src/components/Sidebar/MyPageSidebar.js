import "./MyPageSidebar.css";
import {Link} from "react-router-dom";
import {useState} from "react";

function MyPageSidebar() {
    const [hover, setHover] = useState({
        member: false,
        mission: false,
        gathering: false,
    });

    const handleMouseEnter = (type) => {
        setHover({ ...hover, [type]: true });
    };

    const handleMouseLeave = (type) => {
        setHover({ ...hover, [type]: false });
    };

    return (
        <div className="mypage-sidebar-index">
            <div className="side-bar-wrap">
                <div className="side-bar-content">
                    <div className="img-div"
                         onMouseEnter={() => handleMouseEnter('member')}
                         onMouseLeave={() => handleMouseLeave('member')}
                    >
                        <Link to={"/mypage/member"}>
                            {
                                hover.member ?
                                <p className="hover-div">내 정보</p> :
                                <img
                                    className="icon-user"
                                    alt="Icon user"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658fba9344d595eb7d3c3451/img/---icon--user-@2x.png"
                                />
                            }
                        </Link>
                    </div>
                    <div className="img-div"
                         onMouseEnter={() => handleMouseEnter('mission')}
                         onMouseLeave={() => handleMouseLeave('mission')}
                    >
                        <Link to={"/mypage/mission"}>
                            {
                                hover.mission ?
                                <p className="hover-div">나의 미션</p> :
                                <img
                                    className="icon-trophy"
                                    alt="Icon trophy"
                                    src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658fba9344d595eb7d3c3451/img/---icon--trophy-@2x.png"
                                />
                            }
                        </Link>
                    </div>
                    <div className="img-div"
                         onMouseEnter={() => handleMouseEnter('gathering')}
                         onMouseLeave={() => handleMouseLeave('gathering')}
                    >
                        <Link to={"/mypage/gathering"}>
                            {
                                hover.gathering ?
                                <p className="hover-div">나의 모임</p> :
                                <img
                                className="icon-vegan-rounded"
                                alt="Icon vegan rounded"
                                src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658fba9344d595eb7d3c3451/img/---icon--vegan-rounded-@2x.png"
                                />
                            }
                        </Link>
                    </div>
                    {/*<div className="img-div">*/}
                    {/*    <img*/}
                    {/*        className="group"*/}
                    {/*        alt="Group"*/}
                    {/*        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658fba9344d595eb7d3c3451/img/group-292@2x.png"*/}
                    {/*    />*/}
                    {/*</div>*/}
                    {/*<div className="img-div">*/}
                    {/*    <img*/}
                    {/*        className="icon-headset-help"*/}
                    {/*        alt="Icon headset help"*/}
                    {/*        src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/658fba9344d595eb7d3c3451/img/---icon--headset-help-@2x.png"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default MyPageSidebar;