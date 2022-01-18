import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CButton, CForm, CFormInput, CFormLabel } from '@coreui/react'
import { toast } from 'react-toastify'

import { PostAdmin } from '../../api/admin'

const AddAdmin = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const HandleSubmit = async (event) => {
    event.preventDefault()
    const newAdmin = { email, username, name, password }
    const result = await PostAdmin(newAdmin)
    if (result) {
      toast.success('Tạo tài khoản thành công!', { onClose: () => history.push('/admins') })
    } else {
      toast.error('Đã có lỗi xảy ra!')
    }
  }
  return (
    <CForm onSubmit={HandleSubmit}>
      <div className="mb-3">
        <CFormLabel htmlFor="email">Email</CFormLabel>
        <CFormInput
          type="email"
          id="email"
          placeholder="Email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          style={{ width: '500px' }}
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="username">Username</CFormLabel>
        <CFormInput
          type="text"
          id="username"
          placeholder="Tên đăng nhập"
          requiredvalue={username}
          onChange={({ target }) => setUsername(target.value)}
          style={{ width: '500px' }}
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="name">Tên</CFormLabel>
        <CFormInput
          type="text"
          id="name"
          placeholder="Họ và tên"
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
          style={{ width: '500px' }}
        />
      </div>
      <div className="mb-3">
        <CFormLabel htmlFor="password">Mật khẩu</CFormLabel>
        <CFormInput
          type="password"
          id="password"
          placeholder="Mật khẩu"
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          style={{ width: '500px' }}
        />
      </div>
      <div className="mb-3" style={{ display: 'flex' }}>
        <CButton type="submit" size="lg" style={{ marginTop: '10px' }}>
          Thêm
        </CButton>
      </div>
    </CForm>
  )
}

export default AddAdmin
