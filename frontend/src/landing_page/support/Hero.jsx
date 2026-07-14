import React from 'react'

export default function Hero() {
  return (
    <div style={{backgroundColor:"rgb(245,245,245)"}}>
      <div className="container p-5 ">
        <div className="d-flex justify-content-between ">
                <h3>Support Portal</h3>
                <button className='btn btn-primary  pt-1 pb-1 fs-5 ' style={{width:"10%"}}>My tickets</button>
        </div>
        <div class="input-group input-group-lg mt-4">
            <span class="input-group-text" id="inputGroup-sizing-lg"><i class="fa-solid fa-magnifying-glass"></i></span>
            <input type="text" class="form-control fs-6 py-3" placeholder='Eg: How do I open my account, How do i activate F&O ...' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
        </div>
      </div>
    </div>
     
  )
}
