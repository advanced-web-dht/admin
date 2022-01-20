import React from 'react'
import CIcon from '@coreui/icons-react'
import { cibAddthis, cilList } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Admin',
  },
  {
    component: CNavItem,
    name: 'Danh sách Admin',
    to: '/admins/list',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Thêm Admin',
    to: '/admins/add',
    icon: <CIcon icon={cibAddthis} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Tài khoản',
  },
  {
    component: CNavItem,
    name: 'Danh sách tài khoản',
    to: '/users',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Lớp học',
  },
  {
    component: CNavItem,
    name: 'Danh sách lớp học',
    to: '/classes',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
]

export default _nav
