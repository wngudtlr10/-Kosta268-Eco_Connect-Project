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
                   
                        
                </div>
            </div>
            <Button variant="success" style={{ color:'white'}} onClick={toggleExpand}>
            {isExpanded ? '접기' : '펼치기'}
            </Button>
        </div>
    );
}

export default FundingDetailIntro;