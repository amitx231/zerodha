import React from 'react'

export default function Stats() {
  return (
    <div className='container mt-5 p-5'>
        <div className="row">
            <div className="col-6">
                <h3 className='mb-5'>Trust with confidence</h3>
                <div className='mb-5 mt-3'>
                <h5 className='mb-3'>Customer-first always</h5>
                <p className='lh-lg text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                </div>
                <div className='mb-5 mt-3'>
                <h5 className='mb-3'>No spam or gimmicks</h5>
                <p className='lh-lg text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                </div>
                <div className='mb-5 mt-3'>
                <h5 className='mb-3'>The Zerodha universe</h5>
                <p className='lh-lg text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                </div>
                <div className='mb-5 mt-3'>
                <h5 className='mb-3'>Do better with money</h5>
                <p className='lh-lg text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
            </div>
            <div className="col-6">
                <img src="images/ecosystem.png" style={{width:"90%"}} alt="ecosystem" />
                <div className='text-center'>
                    <a href="" className='fs-5 mx-3' style={{textDecoration:"none",}}>Explore our products <i className="fa-solid fa-arrow-right"></i> </a>
                    <a href="" className='fs-5 mx-3' style={{textDecoration:"none"}}>Try Kite demo <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}
