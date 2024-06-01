import React from 'react'

const QaList = ({data, deleteOneQuestion}) => {
  return (
    <div className='mt-4'>
        {
          data.length >= 1 ? (data.map((item, index, array) => {
            return(
              <div className="accordion" id="accordionExample" key={index}>
                  <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button d-flex justify-content-between" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseOne${index}`} aria-expanded="true" aria-controls={`collapseOne${index}`}>
                          {item.q}
                        </button>
                      </h2>
                      <div id={`collapseOne${index}`} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body d-flex justify-content-start align-items-center">
                            <div>
                              {item.a}
                            </div>
                            <button onClick={() => deleteOneQuestion(item.id)} className='btn-color mx-3 px-4'>حذف</button>
                          </div>
                      </div>
                  </div>
              </div>
            )
          })) : <h2 className='text-center py-5 ffs-4'>لا يوجد سؤل الآن</h2>
        }
    </div>
  )
}

export default QaList