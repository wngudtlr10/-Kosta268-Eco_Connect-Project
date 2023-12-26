import React from "react";

import { useState , useEffect} from "react";
import { CSmartTable } from "@coreui/react-pro";
import { CAvatar, CBadge, CButton,CCollapse, CCardBody} from "@coreui/react-pro";
import UserModify from "./UserModify";
import axios from "axios";


const Users = () => {
    const [details, setDetails] = useState([])
    const [users, setUsers] = useState(false)
    const columns = [
      {
        key: 'profile',
        label: '',
        filter: false,
        sorter: false,
      },
      {
        key: 'name',
        _style: { width: '20%' },
      },
      {
        key: 'address',
        label: 'Address',
        _style: { width: '20%' },
      },
      {
        key : 'email'
      },
      { 
        key: 'isadmin',
        label : 'role',
        _style: { width: '20%' }
      },
      {
        key: 'point',
        label: 'Point',
        _style: { width: '20%' },
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
      fetchUser();
    }, []);
  
    const fetchUser = async () => {
      try {
        // 서버에서 공지사항 데이터를 가져옴
        const response = await axios.get('http://localhost:8080/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('공지사항 데이터를 가져오는 중 오류 발생:', error);
      }
    };
  
    const handleUpdateUser = () => {
      // 데이터가 수정되면 다시 가져옴
      fetchUser();
    };
  
  
    const deleteUser = async (userId) => {
      try {
        // DELETE 요청: 사용자 삭제
        await axios.delete(`http://localhost:8080/api/users/${userId}`);
        // 삭제된 사용자를 제외한 나머지 사용자를 users 상태 업데이트
        setUsers(users.filter(user => user.user_id !== userId));
      } catch (error) {
        console.error('사용자 삭제 중 오류 발생:', error);
      }
    };

    const handleDeleteClick = (userId) => {
      // 삭제 전에 사용자에게 확인 메시지 표시
      const confirmDelete = window.confirm('정말 삭제하시겠습니까?');
    
      if (confirmDelete) {
        // 사용자가 확인을 눌렀을 때만 삭제 동작 실행
        deleteUser(userId);
      }
    };

    const getBadge = (isadmin) => {
      switch (isadmin) {
        case false:
          return 'primary'; // 대기중 - 회색
        case true:
          return 'success';   // 수락완료 - 초록색
        default:
          return 'secondary';    // 기본값 설정 (필요에 따라 변경 가능)
      }
    };

    const getBadgeText = (isadmin) => {
      switch (isadmin) {
        case false:
          return '유저';
        case true:
          return '관리자';
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
        items={users}
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
          address: (item) => (
            <td>
              {item.address.length > 7 ? `${item.address.substring(0, 7)}...` : item.address}
            </td>
          ),
          avatar: (item) => (
            <td>
              <CAvatar src={item.avatar}></CAvatar>
            </td>
          ),
          isadmin: (item) => (
            <td>
               <CBadge color={getBadge(item.isadmin)}>{getBadgeText(item.isadmin)}</CBadge>
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
                    toggleDetails(item.user_id)
                  }}
                >
                  {details.includes(item.user_id) ? 'Hide' : 'Show'}
                </CButton>
              </td>
            )
          },
          details: (item) => {
            return (
              <CCollapse visible={details.includes(item.user_id)}>
                <CCardBody className="p-3">
                  <h4>{item.name}</h4>
                  <p className="text-muted">주소 : {item.address}</p>
                  <UserModify userId={item.user_id} onUpdate={handleUpdateUser}/>
                  <CButton size="sm" color="danger" className="ml-1" style={{color:'white'}}
                   onClick={() => handleDeleteClick(item.user_id)}>
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

export default Users;