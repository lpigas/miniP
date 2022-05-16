import React from 'react'
import MyButton from '../../../../../components/atoms/Buttons/MyButton/MyButton'
import './BlogForm.css'

export default function BlogForm({dataForm, changeBlog, deleteBlog}) {
    console.log(dataForm)
  return (
    <div className='BlogForm' key={dataForm.id}>
        <div className='Blogs'>
        <div>
            {dataForm.title}
        </div>
        </div>
        <div className='BlogsButton'>
        <MyButton className='Change-del' onClick={()=>changeBlog(dataForm)}>Change</MyButton>
        <MyButton className='Change-del' onClick={()=>deleteBlog(dataForm)}>Delete</MyButton>
        </div>
    </div>
  )
}
