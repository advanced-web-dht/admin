import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

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
      <p>
        <b>Tên lớp học:</b> {cls.name}
      </p>
      <p>
        <b>Mã lớp học:</b> {cls.code}
      </p>
      <p>
        <b>Id:</b> {cls.id}
      </p>
      <p>
        <b>Người tạo:</b> {cls?.owner?.name}
      </p>
      <p>
        <b>Số học viên:</b> {cls?.students?.length}
      </p>
      <p>
        <b>Số giảng viên:</b> {cls?.teachers?.length + 1}
      </p>
    </div>
  )
}

export default Class
