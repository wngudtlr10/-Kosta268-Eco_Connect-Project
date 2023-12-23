import React from "react";
import "./ErrorPage.css";

 const ErrorPage500 = () => {
  return (
    <div className="errorPage-index">
      <div className="div">
        <div className="text-wrapper">5</div>
        <div className="text-wrapper-2">1</div>
        <p className="p">죄송합니다. 현재 서버에 알수없는 오류가 발생하였습니다.</p>
        <p className="text-wrapper-3">
          죄송합니다 알수없는 오류가 발생하였습니다, <br />
          새로고침을 하시거나 오류가 지속된다면 관리자에게 문의해주시기 바랍니다.
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

export default ErrorPage500;