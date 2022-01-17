import React, { useState, useEffect } from 'react'

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
import { GetClass } from '../../api/class'

const Class = () => {
  const { id } = useParams()
  const [cls, setCls] = useState({})

  useEffect(() => {
    ;(async () => {
      if (id) {
        const result = await GetClass(id)
        if (result) {
          setCls(result)
        }
      }
    })()
  }, [id])

  return (
    <div>
      <p>Tên lớp học: {cls.name}</p>
      <p>Mã lớp học: {cls.code}</p>
      <p>Id: {cls.id}</p>
      <p>Người tạo: {cls?.owner?.name}</p>
      <p>Sô học viên: {cls?.students?.length}</p>
      <p>Sô giảng viên: {cls?.teachers?.length + 1}</p>
    </div>
  )
}

export default Class
