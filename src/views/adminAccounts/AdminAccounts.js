import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  generatePath,
  Switch,
  Route,
  useHistory,
  useParams,
  Link,
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
import AdminAccount from './AdminAccount'

const AdminAccounts = () => {
  const [id, setId] = useState(1)
  const history = useHistory()
  const handleProceed = (e) => {
    id && history.push(generatePath('/admins/:id', { id }))
  }
  const today = new Date()
  const time = today.getDay() + '/' + today.getMonth() + '/' + today.getFullYear()
  const fakeData = [
    {
      id: 1,
      name: 'Phạm Tấn',
      account: 'seacaboqn',
      dateCreated: time,
    },
    {
      id: 2,
      name: 'Nguyễn Thanh Duy',
      account: 'ntduyfit',
      dateCreated: time,
    },
    {
      id: 3,
      name: 'Lê Hồng Huy',
      account: 'lhonghuyfit',
      dateCreated: time,
    },
  ]
  return (
    <>
      <CTable striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Họ và tên</CTableHeaderCell>
            <CTableHeaderCell scope="col">Tài khoản</CTableHeaderCell>
            <CTableHeaderCell scope="col">Ngày tạo</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {fakeData.map((row) => {
            return (
              <CTableRow key={row.name}>
                <CTableHeaderCell scope="row">{row.id} </CTableHeaderCell>
                <CTableDataCell>
                  {/*<a href={`#/admins/:{row.id}` + row.id}>{row.name}</a>*/}
                  <Link to={`admins/${row.id}`}>{row.name}</Link>
                </CTableDataCell>
                <CTableDataCell>{row.account}</CTableDataCell>
                <CTableDataCell>{row.dateCreated}</CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
    </>
  )
}

export default AdminAccounts
