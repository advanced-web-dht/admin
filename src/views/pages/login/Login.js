import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { SubmitLogin } from '../../../api/auth'
import { toast } from 'react-toastify'
import { useAuth } from '../../../hooks/useAuth'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      history.replace('/admins/list')
    }
  }, [])

  const HandleChangeUsername = ({ target }) => {
    setUsername(target.value)
  }

  const HandleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  const HandleLogin = async (event) => {
    event.preventDefault()
    const result = await SubmitLogin(username, password)
    if (result) {
      toast.success('Đăng nhập thành công')
      localStorage.setItem('user', JSON.stringify(result.data))
      console.log(localStorage.getItem('user').name)
      history.push('/dashboard')
    } else {
      toast.error('Đăng nhập thất bại! Vui lòng thử lại')
    }
  }

  const HandleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      await HandleLogin(event)
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onKeyDown={HandleKeyPress} onSubmit={HandleLogin}>
                    <h1>Đăng nhập</h1>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        value={username}
                        onChange={HandleChangeUsername}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={HandleChangePassword}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type={'submit'}>
                          Đăng nhập
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Trang quản lý ứng dụng </h2>
                    <p>Vui lòng đăng nhập bằng tài khoản quản trị viên của bạn</p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
