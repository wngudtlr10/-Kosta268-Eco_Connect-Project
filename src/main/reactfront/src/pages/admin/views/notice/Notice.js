import React from "react";

import { useState , useEffect} from "react";
import { CSmartTable } from "@coreui/react-pro";
import { CAvatar, CBadge, CButton,CCollapse, CCardBody } from "@coreui/react-pro";
import NoticeModify from "./NoticeModify";
import axios from "axios";


const Notice = () => {
    const [details, setDetails] = useState([])
    const [notices, setNotices] = useState([])

    const columns = [
      {
        key: 'image',
        label: '',
        filter: false,
        sorter: false,
      },
      {
        key: 'title',
        _style: { width: '20%' },
      },
      {
        key: 'content',
        label: 'content',
        _style: { width: '20%' },
      },
      { 
        key: 'created_at',
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
      fetchNotices();
    }, []);
  
    const fetchNotices = async () => {
      try {
        // 서버에서 공지사항 데이터를 가져옴
        const response = await axios.get('http://localhost:8080/api/notice');
        setNotices(response.data);
      } catch (error) {
        console.error('공지사항 데이터를 가져오는 중 오류 발생:', error);
      }
    };
  
    const handleUpdateNotice = () => {
      // 데이터가 수정되면 다시 가져옴
      fetchNotices();
    };
  
  const deleteNotice = async (noticeId) => {
    try {
      // DELETE 요청: 사용자 삭제
      await axios.delete(`http://localhost:8080/api/notice/${noticeId}`);
      // 삭제된 사용자를 제외한 나머지 사용자를 users 상태 업데이트
      setNotices(notices.filter(notice => notice.notice_id !== noticeId));
    } catch (error) {
      console.error('사용자 삭제 중 오류 발생:', error);
    }
  };

  const handleDeleteClick = (noticeId) => {
    // 삭제 전에 사용자에게 확인 메시지 표시
    const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
  
    if (confirmDelete) {
      // 사용자가 확인을 눌렀을 때만 삭제 동작 실행
      deleteNotice(noticeId);
    }
  };

    const getBadge = (status) => {
      switch (status) {
        case 'Active':
          return 'success'
        case 'Inactive':
          return 'secondary'
        case 'Pending':
          return 'warning'
        case 'Banned':
          return 'danger'
        default:
          return 'primary'
      }
    }
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
        items={notices}
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
          content : (item) => (
            <td>
              {item.content.length > 7 ? `${item.content.substring(0, 7)}...` : item.content}
            </td>
          ),
          image: (item) => (
            <td>
              <CAvatar src={item.image}></CAvatar>
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
                    toggleDetails(item.notice_id)
                  }}
                >
                  {details.includes(item.notice_id) ? 'Hide' : 'Show'}
                </CButton>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item.notice_id)}>
                <CCardBody className="p-3">
                  <h4>{item.title}</h4>
                  <p className="text-muted">내용 : {item.content}</p>
                    <NoticeModify noticeId={item.notice_id} onUpdate={handleUpdateNotice}/>
                  <CButton size="sm" color="danger" className="ml-1" style={{color:'white'}} onClick={() => handleDeleteClick(item.notice_id)}>
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

export default Notice;