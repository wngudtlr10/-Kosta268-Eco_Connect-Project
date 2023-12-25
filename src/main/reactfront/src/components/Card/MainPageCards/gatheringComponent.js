import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams, Link } from "react-router-dom";
import AuthAxios from '../../../utils/axios/AuthAxios';
import './gatheringComponent.css'

const GatheringComponent = ({category}) => {
    // const [gatherings, setGathering] = useState([]);
  

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       let url = 'http://localhost:3001/gatheringInfo';
    
    //       // 카테고리 값이 있는 경우, 해당 카테고리에 대한 데이터를 가져옴
    //       if (category !== undefined) {
    //         url += `?category=${category}`;
    //       }
    
    //       const response = await axios.get(url);
    //       const fetchedGatherings = response.data;
    
    //       // 최대 8개의 미션만 가져오도록 수정
    //       const limitedGatherings = fetchedGatherings.slice(0, 6);
    
    //       setGathering(limitedGatherings);
    //     } catch (error) {
    //       console.error('미션 데이터를 불러오는 중 오류 발생:', error);
    //     }
    //   };
    
    //   fetchData();
    // }, [category]);

    const [lists, setLists] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [status, setStatus] = useState("OPEN");
    const [title, setTitle] = useState("");
    const [timer, setTimer] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const loaction = useLocation();

    const [memberId, setMemberId] = useState();



    const fetchData = () => {
        AuthAxios.get(`/api/gathering?page=${page}`)
            .then((response) => {
                setLists(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => {
                console.log('Error fetching data from API: ' , error);
            });
    };

    const fetchDataByStatus = () => {
        if (status !== "") {


            AuthAxios.get(`/api/gathering/status?status=${status}&page=${page}`)
                .then((response) => {
                    setLists(response.data.content);
                    setTotalPages(response.data.totalPages);
                })
                .catch((error) => {
                    console.log('Error fetching data from API: ', error);
                })
        }
    }

    const fetchDataByTitle = () => {
        const encodedTitle = encodeURIComponent(title);
        AuthAxios.get(`/api/gathering/title?title=${encodedTitle}&page=${page}`)
            .then((response) => {
                setLists(response.data.content);
                setTotalPages(response.data.totalPages);
            })
            .catch((error) => {
                console.log('Error fetching data from API: ', error);
            })
    }

    const fetchDataByStatusAndTitle = () => {
        if (status !== "" && title !== "") {
            AuthAxios(`/api/gathering?status=${status}&title=${encodeURIComponent(title)}&page=${page}`)
                .then((response) => {
                    setLists(response.data.content);
                    setTotalPages(response.data.totalPages);
                })
                .catch((error) => {
                    console.log('Error fetching data from API: ', error);
                })
        }
    }


    function createPageNumberArray(startPage, endPage) {
        let pages = []
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }
        return pages;
    }

    useEffect(() => {
        const pageFromUrl = searchParams.get('page');
        const statusFromUrl = searchParams.get('status');
        const titleFromUrl = searchParams.get('title');

        if (pageFromUrl !== null) {
            setPage(parseInt(pageFromUrl));
        }
        if (statusFromUrl !== null) {
            setStatus(statusFromUrl);
        }
        if (titleFromUrl !== null) {
            setTimer(decodeURIComponent(titleFromUrl));
        }

    }, [])

    useEffect(() => {
        setPage(0);
    }, [status])

    useEffect(() => {
        setPage(0);
    }, [title])


    useEffect(() => {
        searchParams.set('page', page.toString());
        if (status !== null) {
            searchParams.set('status', status);
        }
        if (title !== null) {
            searchParams.set('title', encodeURIComponent(title));
        }
        setSearchParams(searchParams);

        if (status !== "" && title !== "") {
            fetchDataByStatusAndTitle();
        }

        else if (status !== "") {
            fetchDataByStatus();
        }
        else if (title !== "") {
            fetchDataByTitle()
        }
        else {
            fetchData();
        }

    }, [page, status, title])
    return (
        <div className="gathering">
            {lists.map((item, index) =>(
      <div className="gathering-box" key={index}>
        {/* <div className="gathering-users">
          <img className="group" alt="Group" src={item.userProfile[0]} />
          <img className="img" alt="Group" src={item.userProfile[1]} />
          <img className="group-2" alt="Group" src={item.userProfile[2]} />
          <img className="group-3" alt="Group" src={item.userProfile[3]} />
          <img className="group-4" alt="Group" src={item.userProfile[4]} />
        </div> */}

        <Link to={`/gathering/${item.gatheringId}`}><div className="text-wrapper-2">{item.title}</div></Link>
        
        <Link to={`/gathering/${item.gatheringId}`}><div className="text-wrapper-3">{item.intro}</div></Link>
        {/* <div className="overlap">
          <div className="item-rectangle" />
          <div className="text-wrapper-4">{item.category}</div>
        </div> */}
        <Link to={`/gathering/${item.gatheringId}`}><div className="image" style={{ backgroundImage: `url(${item.image})` }} /></Link>
       <div className='gathering-list-3'>
        <div className="gathering-list-5">
          <img
              className="gathering-list-6"
              alt="Gathering list"
              src="https://cdn.animaapp.com/projects/6560b21274de9042f7d947f4/releases/656753efcb8de04689f6bb1b/img/group@2x.png"
          />
          <div className="gathering-list-7">
              <div className="text-wrapper-7">{item.count}/{item.capacity}</div>
          </div>
      </div>
      </div>
      </div>

      ))}
    </div>
   )
   }
  export default GatheringComponent;