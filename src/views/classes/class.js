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

const Class = (prpos) => {
  const { id } = useParams()
  // var matches = str.match(/\d+$/);

  console.log(id)
  return (
    <div>
      <p>Tên lớp học: PTUDWNC</p>
      <p>Mã lớp học: PDwRVQWw</p>
      <p>Id: {id}</p>
    </div>
  )
}

export default Class
