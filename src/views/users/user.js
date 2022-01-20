import React, { useEffect, useState } from 'react'

import {
  CButton,
  CFormInput,
  CFormLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CTooltip,
} from '@coreui/react'
import {
  GetAccount,
  MapStudentId,
  UnmapStudentId,
  BlockAccount,
  UnblockAccount,
} from '../../api/account'
import PropTypes from 'prop-types'
import CIcon from '@coreui/icons-react'
import { cilDelete, cilPencil, cilSave, cilLockLocked, cilLockUnlocked } from '@coreui/icons'
import { toast } from 'react-toastify'

const User = ({ id, onClose, isOpen }) => {
  const [account, setAccount] = useState({})
  const [isEditId, setIsEditId] = useState(false)
  const [studentId, setStudentId] = useState('')

  useEffect(() => {
    ;(async () => {
      const result = await GetAccount(id)
      if (result) {
        setAccount(result)
      }
    })()
  }, [id])

  const HandleChangeEdit = () => {
    setIsEditId(true)
  }

  const HandleMapStudentID = async () => {
    const result = await MapStudentId(studentId, account.id)
    if (result) {
      toast.success('Thay đổi mã sinh viên thành công')
      setIsEditId(false)
      setAccount((prev) => ({ ...prev, studentId }))
    } else {
      toast.error('Thay đổi không thành công')
    }
  }

  const HandleUnmapStudentId = async () => {
    const result = await UnmapStudentId(account.id)
    if (result) {
      toast.success('Xoá mã số sinh viên thành công')
      setAccount((prev) => ({ ...prev, studentId: '' }))
    } else {
      toast.error('Thay đổi không thành công')
    }
  }

  const HandleBLockAccount = async () => {
    const result = await BlockAccount(account.id)
    if (result) {
      toast.success('Đã khoá tài khoản!')
      setAccount((prev) => ({ ...prev, status: 'blocked' }))
    } else {
      toast.error('Thay đổi không thành công')
    }
  }

  const HandleUnblockAccount = async () => {
    const result = await UnblockAccount(account.id)
    if (result) {
      toast.success('Đã mở tài khoản')
      setAccount((prev) => ({ ...prev, status: 'active' }))
    } else {
      toast.error('Thay đổi không thành công')
    }
  }

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
            <b>Tên:</b> {account.name}
          </p>
          <p>
            <b>Tài khoản:</b> {account.username}
          </p>
          <p>
            <b>Email:</b> {account.email}
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {isEditId ? (
              <React.Fragment>
                <CFormLabel htmlFor="student-id">Mã sinh viên: </CFormLabel>
                <CFormInput
                  type="text"
                  id="student-id"
                  placeholder="mã số sinh viên"
                  required
                  value={studentId}
                  onChange={({ target }) => setStudentId(target.value)}
                  style={{ width: 150, margin: '0 10px' }}
                />
              </React.Fragment>
            ) : (
              <p>
                <b>Mã sinh viên:</b> {account.studentId}
              </p>
            )}
            <CTooltip content={isEditId ? 'Lưu' : 'Chỉnh sửa'}>
              <CButton
                variant="ghost"
                size="sm"
                color="dark"
                onClick={isEditId ? HandleMapStudentID : HandleChangeEdit}
                style={{ alignSelf: 'flex-start' }}
              >
                <CIcon icon={isEditId ? cilSave : cilPencil} />
              </CButton>
            </CTooltip>
            {account.studentId && (
              <CTooltip content="Xoá">
                <CButton
                  variant="ghost"
                  size="sm"
                  color="dark"
                  onClick={HandleUnmapStudentId}
                  style={{ alignSelf: 'flex-start' }}
                >
                  <CIcon icon={cilDelete} />
                </CButton>
              </CTooltip>
            )}
          </div>
          <p>
            <b>Ngày tạo:</b> {new Date(account.createdAt).toLocaleDateString('vi-VN')}
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p>
              <b>Trạng thái:</b> {account.status}
            </p>
            <CTooltip content={account.status === 'blocked' ? 'Mở khoá' : 'Khoá'}>
              <CButton
                variant="ghost"
                size="sm"
                color="dark"
                onClick={account.status === 'blocked' ? HandleUnblockAccount : HandleBLockAccount}
                style={{ alignSelf: 'flex-start' }}
              >
                <CIcon icon={account.status === 'blocked' ? cilLockUnlocked : cilLockLocked} />
              </CButton>
            </CTooltip>
          </div>
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

User.propTypes = {
  id: PropTypes.number,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
}

export default User
