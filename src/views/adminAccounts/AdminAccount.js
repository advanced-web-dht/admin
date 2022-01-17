import React from 'react'

import {
  BrowserRouter as Router,
  generatePath,
  Switch,
  Route,
  useHistory,
  useParams,
} from 'react-router-dom'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const AdminAccount = (prpos) => {
  const { id } = useParams()
  // var matches = str.match(/\d+$/);

  console.log(id)
  return (
    <div>
      <p>Họ và tên: Phạm Tấn</p>
      <p>Giới tính: Nam</p>
      <p>Ngày sinh: 26/04/2000</p>
      <p>Tài khoản: seacaboqn</p>
      <p>Id: {id}</p>
    </div>
  )
}

export default AdminAccount
