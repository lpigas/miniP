import React from 'react'
import './BlogList.css'
import MyButton from '../../../../../components/atoms/Buttons/MyButton/MyButton'
export default function BlogList() {
  return (
    <div className='allBlogs'>
        <div className='allBlogs__menu'>
        <MyButton className='allBlogs__menu--button'>Add NEW Blog;</MyButton>
        <MyButton className='allBlogs__menu--button'>Reset</MyButton>

        </div>
        
    </div>
  )
}
