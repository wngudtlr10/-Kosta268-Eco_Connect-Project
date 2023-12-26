// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const MissionComponent = () => {
//   const [missions, setMissions] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/mission');
//         const fetchedMissions = response.data;


//         // 최대 8개의 미션만 가져오도록 수정
//         const limitedMissions = fetchedMissions.slice(0, 8);

//         setMissions(limitedMissions);
//       } catch (error) {
//         console.error('미션 데이터를 불러오는 중 오류 발생:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="mission-frame">
//       {missions.map((mission, index) => (
//         <div className="mission-box" key={index}>
//           <img className="element" alt="Element" src={mission.image} />
//           <div className="text-wrapper">{mission.text}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MissionComponent;