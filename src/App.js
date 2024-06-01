import React, { useState } from 'react'
import "./App.css"
import QaTitle from './QaTitle'
import QaINputForm from './QaINputForm'
import QaList from './QaList'
import QaButton from './QaButton'
import { question } from './data'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const [data, setData] = useState(question)
  //Update tthe data List...
  const UpdateDatta = () => {
    setData([...question])
  }
  //Clear all
  const ClearAll = () => {
    question.length = 0
    setData("")
    notify('تم حذف الأسئلة', 'Success')
  }
  //Delete One Question
  const deleteOneQuestion = (ID) => {
    if(data.length >= 1) {
      const index = question.findIndex((q) => q.id === ID )
      question.splice(index, 1)
      setData([...question])
    }
    notify("تم حذف سؤال", "Success")
  }
  //Pushing the notification
  const notify = (message, type) => {
    if(type === 'Success'){
      toast.success(message);
    }
    else if(type === 'Error'){
      toast.error(message);
    }
  }
  return (
    <div className='color-body py-5'>
      <div className='container py-5 '>
          <div className='row'>
              <div className='col-sm-4'>
                <QaTitle/>
              </div>
              <div className='col-sm-8'>
                <QaINputForm UpdateDatta = {UpdateDatta} notify = {notify}/>
                <QaList data = {data} deleteOneQuestion = {deleteOneQuestion} notify = {notify}/>
                <QaButton data = {data} ClearAll = {ClearAll}/>
              </div>
          </div>
          <ToastContainer />
      </div>
    </div>
  )
}

export default App