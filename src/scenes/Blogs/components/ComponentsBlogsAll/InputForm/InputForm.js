import React from 'react'
import Input from '../../../../../components/atoms/Input/Input'
import MyButton from "../../../../../components/atoms/Buttons/MyButton/MyButton";
export default function InputForm({changeModal}) {
  return (
    <div >
        <Input className='ModalInutNewBlog' placeholder='Enter Title'/>
        <Input className='ModalInutNewBlog EnterYourBlog'  placeholder='Enter your blog'/>
        <MyButton onClick={()=> changeModal(false)}>Add blog</MyButton>
    </div>
  )
}
