import React from 'react'
import AddAdmin from './views/adminAccounts/AddAdmin'

const AdminAccounts = React.lazy(() => import('./views/adminAccounts/AdminAccounts'))
const Classes = React.lazy(() => import('./views/classes/classes'))
const Class = React.lazy(() => import('./views/classes/class'))
const Users = React.lazy(() => import('./views/users/users'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/admins/list', name: 'Quản trị viên', component: AdminAccounts, exact: true },
  { path: '/admins/add', name: 'Thêm quản trị viên', component: AddAdmin },
  { path: '/classes', name: 'Lớp học', component: Classes, exact: true },
  { path: '/classes/:id', name: 'Chi tiết lớp học', component: Class },
  { path: '/users', name: 'Tài khoản', component: Users, exact: true },
]

export default routes
