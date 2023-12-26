import React from "react";

import { useState , useEffect} from "react";
import { CSmartTable } from "@coreui/react-pro";
import { CAvatar, CBadge, CButton,CCollapse, CCardBody } from "@coreui/react-pro";
import GatheringModify from "./GatheringModify";
import axios from "axios";
import AuthAxios from "../../../../utils/axios/AuthAxios";


const Gathering = () => {
    const [details, setDetails] = useState([])
    const [gatherings, setGatherings] = useState([]);
    const columns = [
      {
        key: 'title',
        _style: { width: '20%' },
      },
      {
        key: 'intro',
        label: 'intro',
        _style: { width: '20%' },
      }, 
      {
        key: 'fullAddress',
        label:'Address',
        _style: { width: '20%' },
      },
      { 
        key: 'deadline',
        label:'deadline',
        _style: { width: '20%' }
      },
      {
        key : 'count',
        _style: { width: '20%' }
      },
      {
        key : 'capacity',
        _style: { width: '20%' }
      },
      {
        key : 'status',
        _style: { width: '20%' }
      },
      {
        key: 'show_details',
        label: '',
        _style: { width: '1%' },
        filter: false,
        sorter: false,
      },
    ]
     
    

    useEffect(() => {
      // 컴포넌트가 마운트될 때 한 번 데이터를 가져옴
      fetchGathering();
    }, []);
  
    const fetchGathering = async () => {
      try {
        // 서버에서 공지사항 데이터를 가져옴
        const response = await AuthAxios.get('/api/gathering');
        setGatherings(response.data.content);
      } catch (error) {
        console.error('공지사항 데이터를 가져오는 중 오류 발생:', error);
      }
    };
  
    const handleUpdateGathering = () => {
      // 데이터가 수정되면 다시 가져옴
      fetchGathering();
    };

  const deleteGathering = async (gatheringId) => {
    try {
      // DELETE 요청: 사용자 삭제
      await axios.delete(`http://localhost:8080/api/gathering/${gatheringId}`);
      // 삭제된 사용자를 제외한 나머지 사용자를 users 상태 업데이트
      setGatherings(gatherings.filter(gathering => gathering.gatheringId !== gatheringId));
    } catch (error) {
      console.error('사용자 삭제 중 오류 발생:', error);
    }
  };

  const handleDeleteClick = (gatheringId) => {
    // 삭제 전에 사용자에게 확인 메시지 표시
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
  
    if (confirmDelete) {
      // 사용자가 확인을 눌렀을 때만 삭제 동작 실행
      deleteGathering(gatheringId);
    }
  };
  const getBadge = (status) => {
    switch (status) {
      case "OPEN":
        return 'success'; // 대기중 - 회색
      case "CLOSED":
        return 'secondary';   // 수락완료 - 초록색
      case "FINISHED":
        return 'danger';    // 반려 - 빨간색
      default:
        return 'primary';    // 기본값 설정 (필요에 따라 변경 가능)
    }
  };


  const getBadgeText = (status) => {
    switch (status) {
      case "OPEN":
        return "참여가능";
      case "CLOSED":
        return "참여마감";
      case "FINISHED":
        return "종료";
      default:
        return '알 수 없음';
    }
  };
    const toggleDetails = (index) => {
      const position = details.indexOf(index)
      let newDetails = details.slice()
      if (position !== -1) {
        newDetails.splice(position, 1)
      } else {
        newDetails = [...details, index]
      }
      setDetails(newDetails)
    }
    return (
      <CSmartTable
        activePage={1}
        cleaner
        clickableRows
        columns={columns}
        columnFilter
        columnSorter
        footer
        items={gatherings}
        itemsPerPageSelect
        itemsPerPage={5}
        
        pagination
        onFilteredItemsChange={(items) => {
          console.log(items)
        }}
        onSelectedItemsChange={(items) => {
          console.log(items)
        }}
        scopedColumns={{
          intro : (item) => (
            <td>
              {item.intro.length > 7 ? `${item.intro.substring(0, 7)}...` : item.intro}
            </td>
          ),
          fullAddress : (item) => (
            <td>
              {item.fullAddress.length > 7 ? `${item.fullAddress.substring(0, 7)}...` : item.fullAddress}
            </td>
          ),
          image: (item) => (
            <td>
              <CAvatar src={item.image}></CAvatar>
            </td>
          ),
          status: (item) => (
            <td>
              <CBadge color={getBadge(item.status)}>{getBadgeText(item.status)}</CBadge>
            </td>
        ),
          show_details: (item) => {
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={() => {
                    toggleDetails(item.gatheringId)
                  }}
                >
                  {details.includes(item.gatheringId) ? 'Hide' : 'Show'}
                </CButton>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item.gatheringId)}>
                <img src={item.image} />
                <CCardBody className="p-3">
                  <h4>{item.title}</h4>
                  <p className="text-muted">내용 : {item.intro}</p>
                  <p className="text-muted">주소 : {item.fullAddress + item.subAddress}</p>
                  <p className="text-muted">우편번호 : {item.zoneCode}</p>
                  <p className="text-muted">마감일 : {item.deadline}</p>
                  <p className="text-muted">시작일 : {item.startAt}</p>
                   {/*<GatheringModify gatheringId={item.gatheringId} onUpdate={handleUpdateGathering}/>*/}
                  <CButton size="sm" color="danger" className="ml-1" style={{color:'white'}}
                  onClick={() => handleDeleteClick(item.gatheringId)}
                  >
                    삭제
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          },
        }}
        selectable
        sorterValue={{ column: 'status', state: 'asc' }}
        tableFilter
        tableProps={{
          className: 'add-this-class',
          responsive: true,
          striped: true,
          hover: true,
        }}
        tableBodyProps={{
          className: 'align-middle'
        }}
      />
    );
}

export default Gathering;