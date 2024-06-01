import React, { useState } from 'react'
import { question } from './data'
const QaINputForm = ({UpdateDatta, notify}) => {
  const [userNewQu, setUserNewQu] = useState('')
  const [userNewAn, setUserNewAn] = useState('')
  //Add New Items
  const AddNewItem = () => {
    if(userNewQu === "" || userNewAn === "") {
      notify('لا يمكن أن تكون حقول الإدخال فارغة', "Error")
    }
    else {
      notify("تم إضافة سؤال", "Success")
      question.push({id: Math.random(), q:userNewQu, a:userNewAn})
      setUserNewQu('')
      setUserNewAn('')
      UpdateDatta()
    }
   
  }
  return (
    <div className='container'>
      <div className='row'>
          <div className='col-sm-5'>
            <input value={userNewQu} onChange={(e) => setUserNewQu(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" placeholder='الرجاء إدخال سؤال' />
          </div>
          <div className='col-sm-5'>
            <input value={userNewAn} onChange={(e) => setUserNewAn(e.target.value)} type="text" class="form-control" id="exampleInputEmail1" placeholder='الرجاء إدخال إجابة' />
          </div>
          <div className='col-sm-2'>
            <button onClick={AddNewItem} type="submit" class="btn-color w-100">أرسل</button>
          </div>
      </div>
    </div>
  )
}

export default QaINputForm