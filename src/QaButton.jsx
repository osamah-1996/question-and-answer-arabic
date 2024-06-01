import React from 'react'

const QaButton = ({data, ClearAll}) => {
  return (
    <div className='mt-2'>
      {data.length >= 1 ? (<button onClick={() =>ClearAll()} className='btn-color w-100'>مسح الكل</button>) :null}
    </div>
  )
}

export default QaButton