import React from 'react'


//관리자 페이지 구현
const Users = React.lazy(() => import('./pages/admin/views/user/Users'))
const Mission = React.lazy(() => import('./pages/admin/views/mission/Missions'))
const Gathering = React.lazy(() => import('./pages/admin/views/gathering/Gathering'))
const Punding = React.lazy(() => import('./pages/admin/views/punding/Punding'))
const Fna = React.lazy(() => import('./pages/admin/views/notice/Fna'))
const Notice = React.lazy(() => import('./pages/admin/views/notice/Notice'))
const Qna = React.lazy(() => import('./pages/admin/views/notice/Qna'))
const MissionUser = React.lazy(() => import('./pages/admin/views/mission/MissionsUser'))

const routes = [
  { path: '/admin', exact: true, name: 'Home' },
  { path: '/users', name: 'Users', element: Users },
  { path: '/mission/mission', name: 'Mission', element: Mission },
  { path: '/gathering', name: 'Gathering', element: Gathering },
  { path: '/punding', name: 'Punding', element: Punding },
  { path: '/notice/notice', name: 'Notice', element: Notice },
  { path: '/notice/fna', name: 'Fna', element: Fna },
  { path: '/notice/qna', name: 'Qna', element: Qna },
  { path: '/mission/user', name: 'MissionUser', element: MissionUser },


]

export default routes
