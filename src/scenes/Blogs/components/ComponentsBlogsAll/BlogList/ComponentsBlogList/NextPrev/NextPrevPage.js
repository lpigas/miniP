import React from 'react'
import MyButton from '../../../../../../../components/atoms/Buttons/MyButton/MyButton'
import './NextPrevPage.css'
export default function NextPrevPage({numberOfPage = 1, setNumberOfPage, totalPages}) {
    const nextPage = () =>{
        if (numberOfPage >= totalPages){
            setNumberOfPage(totalPages)
        }else {
            setNumberOfPage(numberOfPage + 1)
        }
    }
    const prevPage = () =>{
        if (numberOfPage <= 1){
            setNumberOfPage(1)
        } else {
            setNumberOfPage(numberOfPage - 1)
        }
        
    }
  return (
    <div className='NextPrevPage'>
        <MyButton disabled onClick={prevPage}>Prev Page</MyButton>
        <div>{numberOfPage} from {totalPages}</div>
        <MyButton onClick={nextPage}>Next Page</MyButton>
    </div>
  )
}
