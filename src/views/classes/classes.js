import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  CButton,
  CCol,
  CFormInput,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { GetAllClasses } from '../../api/class'

const Classes = () => {
  const [sort, setSort] = useState('DESC')
  const [search, setSearch] = useState('')
  const [classes, setClasses] = useState([])

  useEffect(() => {
    ;(async () => {
      await HandleSubmitSearch()
    })()
  }, [sort])

  const HandleSubmitSearch = async () => {
    const result = await GetAllClasses(sort, search)
    if (result) {
      setClasses(result)
    }
  }

  const HandleChangeSearch = ({ target }) => {
    setSearch(target.value)
  }

  const HandleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      await HandleSubmitSearch()
    }
  }

  return (
    <>
      <div className="mb-3">
        <CRow xs={{ gutter: 2 }}>
          <CCol xs={{ span: 8 }}>
            <CFormInput
              type="text"
              id="search-input"
              placeholder="Nhập tên lớp"
              value={search}
              onChange={HandleChangeSearch}
              onKeyDown={HandleKeyDown}
            />
          </CCol>
          <CCol xs={{ span: 4 }} p>
            <CButton
              color="primary"
              style={{ display: 'flex', alignItems: 'center' }}
              onClick={HandleSubmitSearch}
            >
              Tìm kiếm
            </CButton>
          </CCol>
        </CRow>
      </div>
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
          {classes.map((row) => {
            return (
              <CTableRow key={row.id}>
                <CTableHeaderCell scope="row">{row.id} </CTableHeaderCell>
                <CTableDataCell>
                  <Link to={`classes/${row.id}`}>{row.name}</Link>
                </CTableDataCell>
                <CTableDataCell>{row.code}</CTableDataCell>
                <CTableDataCell>
                  {new Date(row.createdAt).toLocaleDateString('vi-VN')}
                </CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
    </>
  )
}

export default Classes
