import React from 'react'
import { Random } from 'mockjs'
import { useLocation, useNavigate } from './react-router.index.js'

export default () => {
  const location = useLocation()
  const na = useNavigate()
  const handleClick = (path) => {
    na(path)
    console.log('location.pathname----', window.location.pathname)
    console.log('na history----', window.history.state)
  }

  return (
    <div style={{ margin: 20 }}>
      navigate跳转：
      <span className='link' onClick={() => handleClick('/')}>home</span>
      <span className='link' onClick={() => handleClick('/about')}>about</span>
      <span className='link' onClick={() => handleClick('/page')}>page</span>
    </div>
  )
}