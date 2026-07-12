import React from 'react'

export default function Awards() {
  return (
    <div className='container mt-5 p-5'>
        <div className='row'>
            <div className="col">
                <img src="images/largestBroker.svg" alt="reward-left-image" />
            </div>
            <div className="col mt-5">
                <h1>Largest stock broker in India</h1>
                <p>+2 million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                <div className="row mt-5">
                    <div className="col">
                    <ul>
                        <li>Futures and Options</li>
                        <li>Commodity derivatives</li>
                        <li>Currency derivatives</li>
                    </ul>
                    </div>
                    <div className="col">
                        <ul>
                            <li>Stocks and IPOs</li>
                            <li>Direct mitual funds</li>
                            <li>Bonds and Gov. Securities</li>
                        </ul>
                    </div>
                </div>
                <img src="images/pressLogos.png" style={{width:"95%"}} alt="pressLogos" />
            </div>
        </div>
    </div>
  )
}
