import React from "react";
import "./ErrorPage.css";

 const ErrorPage400 = () => {
  return (
    <div className="errorPage-index">
      <div className="div">
        <div className="text-wrapper">4</div>
        <div className="text-wrapper-2">4</div>
        <p className="p">죄송합니다. 현재 찾을 수 없는 페이지를 요청 하셧습니다.</p>
        <p className="text-wrapper-3">
          페이지의 주소가 잘못 입력 되었거나, <br />
          주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
        </p>
        <div className="overlap-group">
          <a className="text-wrapper-4" href={'/'}>홈으로 돌아가기</a>
        </div>
        <img
          className="image"
          alt="Image"
          src="https://cdn.animaapp.com/projects/65706d5f494511ff7a929086/releases/6576f04414ce421528c96ecc/img/image-7.png"
        />
      </div>
    </div>
  );
};

export default ErrorPage400;