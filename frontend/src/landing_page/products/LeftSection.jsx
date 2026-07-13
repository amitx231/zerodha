import React from 'react'

export default function LeftSection({imageUrl,productName, productDescription,linkName1,linkName2}) {
  return (
    <div className="container p-5">
        <div className="row">
            <div className="col-7">
                <img src={imageUrl} alt="leftImage" />
            </div>
            <div className="col-5 mt-5">
                <h3 className='mb-4'>{productName}</h3>
                <p style={{lineHeight:"1.7rem" , fontSize:"1.2rem"}}>{productDescription}</p>
                <div className="d-flex gap-5 mb-4">
                    {linkName1 && (
                        <a href="#" className="fs-5 text-decoration-none">
                        {linkName1} <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    )}

                    {linkName2 && (
                        <a href="#" className="fs-5 text-decoration-none">
                        {linkName2} <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    )}
                </div>
                <div className="d-flex gap-3">
                    <a href="https://play.google.com/store/apps/details?id=com.zerodha.kite3">
                        <img src="/images/googlePlayBadge.svg" alt="Google Play" />
                    </a>

                    <a href="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802">
                        <img src="/images/appstoreBadge.svg" alt="App Store" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
