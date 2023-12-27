import React ,{useState}from "react";
import Button from "react-bootstrap/esm/Button";

const FundingDetailIntro = () => {
    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
    return (
        <div className="Story_story">
            <div style={{  height: isExpanded ? 'auto' : '2300px', overflow: 'hidden', transition: 'height 0.3s' }}>
                <div className="inner-contents fr-view" >
                    <p>
                        <img
                            alt="제목을 입력해주세요_-001 (22).jpg"
                            data-width={671}
                            data-height={311}
                            data-natural-width={1080}
                            data-natural-height={500}
                            style={{ 
                                textAlign: "center",
                                display: "block",
                                float: "none",
                                verticalAlign: "top",
                                margin: "5px auto",
                                visibility: "visible"
                            }}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0925/20230925155649112_17.jpeg"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0925/20230925155649112_17.jpeg/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            alt="제목을-입력해주세요_ (15).gif"
                            data-width={671}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            style={{ 
                                textAlign: "center",
                                display: "block",
                                float: "none",
                                verticalAlign: "top",
                                margin: "5px auto",
                                visibility: "visible"
                            }}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0925/20230925155650768_82.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0925/20230925155650768_82.gif"
                        />
                    </p>
                    <p>
                        <img
                            alt="LED.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            style={{ 
                                textAlign: "center",
                                display: "block",
                                float: "none",
                                verticalAlign: "top",
                                margin: "5px auto",
                                visibility: "visible"
                            }}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114744932_79.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114744932_79.gif"
                        />
                        <img
                            alt="제목을 입력해주세요_-002 (2).png"
                            data-width={671}
                            data-height={503}
                            data-natural-width={800}
                            data-natural-height={600}
                            style={{ 
                                textAlign: "center",
                                display: "block",
                                float: "none",
                                verticalAlign: "top",
                                margin: "5px auto",
                                visibility: "visible"
                            }}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0925/20230925160820008_15.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0925/20230925160820008_15.png/wadiz/format/jpg/quality/80/"
                        />
                        <img
                            alt="볼옮기고 가습.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            style={{ 
                                textAlign: "center",
                                display: "block",
                                float: "none",
                                verticalAlign: "top",
                                margin: "5px auto",
                                visibility: "visible"
                            }}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114442347_59.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114442347_59.gif"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="ezgif.com-video-to-gif (13).gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922113614089_61.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922113614089_61.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="02.png"
                            data-width={670}
                            data-height={84}
                            data-natural-width={1001}
                            data-natural-height={126}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922113614392_34.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922113614392_34.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="가습1.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922113614958_67.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922113614958_67.gif"
                        />
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="03.png"
                            data-width={670}
                            data-height={84}
                            data-natural-width={1001}
                            data-natural-height={126}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922113615219_48.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922113615219_48.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="테라리움1.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922113615887_85.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922113615887_85.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="04.png"
                            data-width={670}
                            data-height={84}
                            data-natural-width={1001}
                            data-natural-height={126}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922113616159_26.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922113616159_26.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="모드변경.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922113616501_5.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922113616501_5.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="05.png"
                            data-width={670}
                            data-height={84}
                            data-natural-width={1001}
                            data-natural-height={126}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922113616681_67.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922113616681_67.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="이끼.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922113617391_92.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922113617391_92.gif"
                        />
                    </p>
                    <p>
                        <br />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="킥스타터달성.gif"
                            data-width={670}
                            data-height={867}
                            data-natural-width={1000}
                            data-natural-height={1294}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114059247_53.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114059247_53.gif"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="07.png"
                            data-width={670}
                            data-height={363}
                            data-natural-width={1001}
                            data-natural-height={542}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114059378_34.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114059378_34.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="08.png"
                            data-width={670}
                            data-height={309}
                            data-natural-width={1001}
                            data-natural-height={461}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114059503_26.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114059503_26.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="가습1.gif"
                            data-height={377}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114100695_10.gif"
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114100695_10.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="09.png"
                            data-width={670}
                            data-height={143}
                            data-natural-width={1001}
                            data-natural-height={213}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114101096_91.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114101096_91.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="10.png"
                            data-width={670}
                            data-height={97}
                            data-natural-width={1001}
                            data-natural-height={145}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114101303_62.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114101303_62.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="400리터.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114102216_33.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114102216_33.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="11.png"
                            data-width={670}
                            data-height={143}
                            data-natural-width={1001}
                            data-natural-height={213}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114102507_57.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114102507_57.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>

                    <p>
                        <strong>
                            <img
                                style={{ 
                                    display: "block",
                                    verticalAlign: "top",
                                    margin: "5px auto",
                                    textAlign: "center",
                                    visibility: "visible"
                                }}
                                alt="12.png"
                                data-width={670}
                                data-height={97}
                                data-natural-width={1001}
                                data-natural-height={145}
                                data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114102645_39.png"
                                data-src-width={523}
                                src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114102645_39.png/wadiz/resize/800/format/jpg/quality/80/"
                            />
                        </strong>
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="안개내려오는컷.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114104076_22.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114104076_22.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="13.png"
                            data-width={670}
                            data-height={405}
                            data-natural-width={1001}
                            data-natural-height={605}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114104379_11.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114104379_11.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="14.png"
                            data-width={670}
                            data-height={401}
                            data-natural-width={1001}
                            data-natural-height={599}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114104487_59.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114104487_59.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="공기정화.png"
                            data-width={670}
                            data-height={930}
                            data-natural-width={1000}
                            data-natural-height={1388}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922165418131_25.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922165418131_25.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="15.png"
                            data-natural-height={151}
                            data-natural-width={1001}
                            data-width={670}
                            data-height={101}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922165418261_19.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922165418261_19.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="아침.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114437872_96.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114437872_96.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="16.png"
                            data-height={101}
                            data-natural-height={151}
                            data-width={670}
                            data-natural-width={1001}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922165418385_66.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922165418385_66.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="출근부터퇴근.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114439012_34.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114439012_34.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="17.png"
                            data-height={101}
                            data-natural-height={151}
                            data-width={670}
                            data-natural-width={1001}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922165418478_8.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922165418478_8.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="사무실.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114439720_19.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114439720_19.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="18.png"
                            data-height={101}
                            data-natural-height={151}
                            data-width={670}
                            data-natural-width={1001}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922165418590_95.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922165418590_95.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="거실.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114440585_11.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114440585_11.gif"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="19.png"
                            data-width={670}
                            data-height={309}
                            data-natural-width={1001}
                            data-natural-height={461}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114441072_25.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114441072_25.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="20.png"
                            data-width={670}
                            data-height={97}
                            data-natural-width={1001}
                            data-natural-height={145}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114441195_32.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114441195_32.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="모드변경.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114441509_13.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114441509_13.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="21.png"
                            data-width={670}
                            data-height={104}
                            data-natural-width={1001}
                            data-natural-height={156}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114441761_90.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114441761_90.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="볼옮기고 가습.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114442347_59.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114442347_59.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="22.png"
                            data-width={670}
                            data-height={270}
                            data-natural-width={1001}
                            data-natural-height={404}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114442685_40.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114442685_40.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <br />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="볼옮기고 테라리움.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114443487_62.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114443487_62.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="23.png"
                            data-width={670}
                            data-height={270}
                            data-natural-width={1001}
                            data-natural-height={404}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114443992_60.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114443992_60.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="24.png"
                            data-width={670}
                            data-height={143}
                            data-natural-width={1001}
                            data-natural-height={214}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114444094_62.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114444094_62.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>

                    <p>
                        <strong>
                            <img
                                style={{ 
                                    display: "block",
                                    verticalAlign: "top",
                                    margin: "5px auto",
                                    textAlign: "center",
                                    visibility: "visible"
                                }}
                                alt="25.png"
                                data-width={670}
                                data-height={96}
                                data-natural-width={1001}
                                data-natural-height={144}
                                data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114444303_84.png"
                                data-src-width={523}
                                src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114444303_84.png/wadiz/resize/800/format/jpg/quality/80/"
                            />
                        </strong>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="마그네틱볼.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114444575_84.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114444575_84.gif"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="26.png"
                            data-width={670}
                            data-height={309}
                            data-natural-width={1001}
                            data-natural-height={461}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114739893_41.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114739893_41.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="모스랩파크1.gif"
                            data-height={377}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922115531001_4.gif"
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922115531001_4.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="27.png"
                            data-width={670}
                            data-height={154}
                            data-natural-width={1001}
                            data-natural-height={230}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114741193_61.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114741193_61.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="모스랩파크2.gif"
                            data-height={377}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922115531713_35.gif"
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922115531713_35.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="모스랩파크3.gif"
                            data-height={377}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922115532487_77.gif"
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922115532487_77.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="28.png"
                            data-width={670}
                            data-height={329}
                            data-natural-width={1001}
                            data-natural-height={491}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114743142_30.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114743142_30.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="29.png"
                            data-width={670}
                            data-height={309}
                            data-natural-width={1001}
                            data-natural-height={461}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114743238_67.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114743238_67.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="30.png"
                            data-width={670}
                            data-height={151}
                            data-natural-width={1001}
                            data-natural-height={225}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114743330_48.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114743330_48.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="사무실.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114743802_72.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114743802_72.gif"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="LED.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114744932_79.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114744932_79.gif"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="테라리움1.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114746218_77.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114746218_77.gif"
                        />
                    </p>
                    <p>
                        <br />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible"
                            }}
                            alt="32.png"
                            data-width={670}
                            data-height={309}
                            data-natural-width={1001}
                            data-natural-height={461}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114943337_53.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114943337_53.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "71.6585px"
                            }}
                            alt="33.png"
                            data-width={670}
                            data-height={92}
                            data-natural-width={1001}
                            data-natural-height={137}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114943496_90.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114943496_90.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "306.51px"
                            }}
                            alt="34.png"
                            data-width={670}
                            data-height={392}
                            data-natural-width={1001}
                            data-natural-height={586}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114943759_69.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114943759_69.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "75.843px"
                            }}
                            alt="35.png"
                            data-width={670}
                            data-height={97}
                            data-natural-width={1001}
                            data-natural-height={145}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114943912_48.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114943912_48.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "294.513px"
                            }}
                            alt="이끼1.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114944297_11.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114944297_11.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "315.925px"
                            }}
                            alt="36.png"
                            data-width={670}
                            data-height={404}
                            data-natural-width={1001}
                            data-natural-height={604}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114944577_17.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114944577_17.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "241.128px"
                            }}
                            alt="37.png"
                            data-width={670}
                            data-height={309}
                            data-natural-width={1001}
                            data-natural-height={461}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114944684_71.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114944684_71.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "311.741px"
                            }}
                            alt="38.png"
                            data-width={670}
                            data-height={399}
                            data-natural-width={1001}
                            data-natural-height={596}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114944876_68.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114944876_68.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>

                    <p>
                        <strong>
                            <img
                                style={{ 
                                    display: "block",
                                    verticalAlign: "top",
                                    margin: "5px auto",
                                    textAlign: "center",
                                    visibility: "visible",
                                    width: "523.578px",
                                    height: "294.513px"
                                }}
                                alt="이끼2.gif"
                                data-width={670}
                                data-height={377}
                                data-natural-width={800}
                                data-natural-height={450}
                                data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922114945546_75.gif"
                                data-src-width={523}
                                src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922114945546_75.gif"
                            />
                        </strong>
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "73.7507px"
                            }}
                            alt="39.png"
                            data-width={670}
                            data-height={94}
                            data-natural-width={1001}
                            data-natural-height={141}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922115124850_2.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922115124850_2.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "294.513px"
                            }}
                            alt="이끼3.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922115125466_98.gif"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922115125466_98.gif"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "111.411px"
                            }}
                            alt="40.png"
                            data-width={670}
                            data-height={143}
                            data-natural-width={1001}
                            data-natural-height={213}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922115125774_75.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922115125774_75.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "hidden",
                                width: "523.578px",
                                height: "294.513px"
                            }}
                            alt="필터바꾸기.gif"
                            data-width={670}
                            data-height={377}
                            data-natural-width={800}
                            data-natural-height={450}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922115126688_68.gif"
                            data-src-width={523}
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "144.363px"
                            }}
                            alt="41.png"
                            data-width={670}
                            data-height={185}
                            data-natural-width={1001}
                            data-natural-height={276}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922115126960_9.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922115126960_9.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "hidden",
                                width: "523.578px",
                                height: "294.513px"
                            }}
                            alt="인테리어.gif"
                            data-height={377}
                            data-natural-height={450}
                            data-width={670}
                            data-natural-width={800}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922170126849_52.gif"
                            data-src-width={523}
                        />
                    </p>

                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "1146.11px"
                            }}
                            alt="리워드사양.png"
                            data-width={670}
                            data-height={1467}
                            data-natural-width={1000}
                            data-natural-height={2189}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922134407369_19.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922134407369_19.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "730.391px"
                            }}
                            alt="구성품.png"
                            data-width={670}
                            data-height={935}
                            data-natural-width={1000}
                            data-natural-height={1395}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/0922/20230922134407568_41.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/0922/20230922134407568_41.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                    <p />
                    <p>
                        <img
                            style={{ 
                                display: "block",
                                verticalAlign: "top",
                                margin: "5px auto",
                                textAlign: "center",
                                visibility: "visible",
                                width: "523.578px",
                                height: "4624.24px"
                            }}
                            alt="모스에어 - reward list.png"
                            data-width={671}
                            data-height={5925}
                            data-natural-width={1000}
                            data-natural-height={8832}
                            data-src="https://www.wadiz.kr/ft/images/green001/2023/1016/20231016162803598_85.png"
                            data-src-width={523}
                            src="https://cdn.wadiz.kr/ft/images/green001/2023/1016/20231016162803598_85.png/wadiz/resize/800/format/jpg/quality/80/"
                        />
                    </p>
                        
                </div>
            </div>
            <Button variant="success" style={{ color:'white'}} onClick={toggleExpand}>
            {isExpanded ? '접기' : '펼치기'}
            </Button>
        </div>
    );
}

export default FundingDetailIntro;