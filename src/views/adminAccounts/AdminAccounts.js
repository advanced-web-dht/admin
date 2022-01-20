import React, { useState, useEffect } from 'react'

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

import CIcon from '@coreui/icons-react'
import { cilArrowBottom } from '@coreui/icons/js/free/cil-arrow-bottom'
import { cilArrowTop } from '@coreui/icons/js/free/cil-arrow-top'

import { GetAdminList } from '../../api/admin'
import AdminAccount from './AdminAccount'
import { useToggle } from '../../hooks/useToggle'

const AdminAccounts = () => {
  const [selectedId, setSelectedId] = useState(null)
  const [sort, setSort] = useState('DESC')
  const [search, setSearch] = useState('')
  const [admins, setAdmins] = useState([])

  const [openModal, handleOpenModal, handleCloseModal] = useToggle()

  useEffect(() => {
    ;(async () => {
      await HandleSubmitSearch()
    })()
  }, [sort])

  const HandleSubmitSearch = async () => {
    const result = await GetAdminList(sort, search)
    if (result) {
      setAdmins(result)
    }
  }

  const HandleChangeSearch = ({ target }) => {
    setSearch(target.value)
  }

  const HandleCloseModal = () => {
    handleCloseModal()
  }

  const HandleChangeAdmin = (id) => {
    setSelectedId(id)
    handleOpenModal()
  }

  const HandleKeyDown = async (event) => {
    if (event.key === 'Enter') {
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
              placeholder="Nhập tên hoặc email"
              value={search}
              onChange={HandleChangeSearch}
              onKeyDown={HandleKeyDown}
            />
          </CCol>
          <CCol xs={{ span: 4 }}>
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
            <CTableHeaderCell scope="col">Tên</CTableHeaderCell>
            <CTableHeaderCell scope="col">
              <CButton
                color="dark"
                variant="ghost"
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={() => setSort((prev) => (prev === 'DESC' ? 'ASC' : 'DESC'))}
              >
                Ngày tạo
                <CIcon icon={sort === 'DESC' ? cilArrowBottom : cilArrowTop} size="lg" />
              </CButton>
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">Thao tác</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {admins.map((row) => {
            return (
              <CTableRow key={row.id}>
                <CTableHeaderCell scope="row">{row.id} </CTableHeaderCell>
                <CTableDataCell>{row.name}</CTableDataCell>
                <CTableDataCell>{new Date(row.createdAt).toLocaleString('vi-VN')}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="success" onClick={() => HandleChangeAdmin(row.id)}>
                    Xem
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
      <AdminAccount id={selectedId} onClose={HandleCloseModal} isOpen={openModal} />
    </>
  )
}

export default AdminAccounts
