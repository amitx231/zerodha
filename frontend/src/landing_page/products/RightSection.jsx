import React from 'react'

export default function RightSection({imageUrl,productName, productDescription,linkName}) {
  return (
    <div className="container p-5">
        <div className="row">
            <div className="col-5" style={{paddingTop:"12rem"}}>
                <h3 className='mb-4'>{productName}</h3>
                <p style={{lineHeight:"1.7rem" , fontSize:"1.2rem"}}>{productDescription}</p>
                <a href="" className='fs-5' style={{textDecoration:"none",}}>{linkName}<i className="fa-solid fa-arrow-right mb-4"></i> </a>
            </div>
            <div className="col-7">
                <img src={imageUrl} alt="rightImage" />
            </div>
        </div>
    </div>
  )
}
