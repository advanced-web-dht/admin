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

const Classes = () => {
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
      name: 'PTUDWNC',
      code: 'PDwRVQWw',
      idDeleted: 0,
      isArchived: 0,
      visibility: 'public',
      dateCreated: time,
      dateModified: time,
    },
    {
      id: 2,
      name: 'PTUDWNC',
      code: 'PDwRVQWw',
      idDeleted: 0,
      isArchived: 0,
      visibility: 'public',
      dateCreated: time,
      dateModified: time,
    },
    {
      id: 3,
      name: 'PTUDWNC',
      code: 'PDwRVQWw',
      idDeleted: 0,
      isArchived: 0,
      visibility: 'public',
      dateCreated: time,
      dateModified: time,
    },
  ]
  return (
    <>
      <CTable striped>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Tên lớp học</CTableHeaderCell>
            <CTableHeaderCell scope="col">Code</CTableHeaderCell>
            <CTableHeaderCell scope="col">Ngày tạo</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {fakeData.map((row) => {
            return (
              <CTableRow key={row.name}>
                <CTableHeaderCell scope="row">{row.id} </CTableHeaderCell>
                <CTableDataCell>
                  <Link to={`classes/${row.id}`}>{row.name}</Link>
                </CTableDataCell>
                <CTableDataCell>{row.code}</CTableDataCell>
                <CTableDataCell>{row.dateCreated}</CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
    </>
  )
}

export default Classes
