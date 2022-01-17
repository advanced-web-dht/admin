import React, { useEffect, useState } from 'react'

import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import { GetAdmin } from '../../api/admin'
import PropTypes from 'prop-types'

const AdminAccount = ({ id, onClose, isOpen }) => {
  const [admin, setAdmin] = useState({})

  useEffect(() => {
    ;(async () => {
      const result = await GetAdmin(id)
      if (result) {
        setAdmin(result)
      }
    })()
  }, [id])

  return (
    <CModal visible={isOpen} onClose={onClose} alignment="center">
      <CModalHeader>
        <CModalTitle>Chi tiết tài khoản</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <div>
          <p>Id: {id}</p>
          <p>Tên: {admin.name}</p>
          <p>Tài khoản: {admin.username}</p>
          <p>Email: {admin.email}</p>
          <p>Ngày tạo: {admin.createdAt}</p>
          <p>Người tạo: {admin.creator ? admin.creator.name : 'không'}</p>
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={onClose}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  )
}

AdminAccount.propTypes = {
  id: PropTypes.number,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default AdminAccount
