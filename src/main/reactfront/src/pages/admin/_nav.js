import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCursor,
  cilPencil,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
 
  {
    component: CNavTitle,
    name: '관리',
  },
  {
    component: CNavItem,
    name: '유저 관리',
    to: '/admin/users',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: '환경 보호 미션 관리',
    to: '/admin/mission',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '미션 관리',
        to: '/admin/mission/mission',
      },
      {
        component: CNavItem,
        name: '사용자 미션 관리',
        to: '/admin/mission/user',
      },
    ],
  },
  {
    component: CNavItem,
    name: '봉사 모임 관리',
    to: '/admin/gathering',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '펀딩 관리',
    to: '/admin/punding',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: '기프티콘 관리',
    to: '/admin/gifticon',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: '공지사항 관리',
    to: '/admin/notice',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: '공지사항',
        to: '/admin/notice/notice',
      },
      {
        component: CNavItem,
        name: 'Q&A',
        to: '/admin/notice/qna',
      },
      {
        component: CNavItem,
        name: 'F&A',
        to: '/admin/notice/fna',
      },
    ],

  }
]

export default _nav
