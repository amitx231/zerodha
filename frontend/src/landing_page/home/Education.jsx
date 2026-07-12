import React from 'react'

export default function Education() {
  return (
    <div className='container mt-5 p-5'>
        <div className="row">
            <div className="col-6">
                <img src="images/education.svg" style={{width:"75%"}} alt="education-varsity" />
            </div>
            <div className="col-6">
                <div className='mb-5 mt-3'>
                    <p className='lh-lg text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" className='fs-5 mx-3' style={{textDecoration:"none",}}>Varsity<i className="fa-solid fa-arrow-right"></i> </a>
                </div>
                <div className='mb-5 mt-3'>
                    <p className='lh-lg text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" className='fs-5 mx-3' style={{textDecoration:"none",}}>TradingQ&A<i className="fa-solid fa-arrow-right"></i> </a>
                </div>
            </div>
        </div>
    </div>
  )
}
