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
          <p>
            <b>Id:</b> {id}
          </p>
          <p>
            <b>Tên:</b> {admin.name}
          </p>
          <p>
            <b>Tài khoản:</b> {admin.username}
          </p>
          <p>
            <b>Email:</b> {admin.email}
          </p>
          <p>
            <b>Ngày tạo:</b> {admin.createdAt}
          </p>
          <p>
            <b>Người tạo:</b> {admin.creator ? admin.creator.name : 'không'}
          </p>
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
