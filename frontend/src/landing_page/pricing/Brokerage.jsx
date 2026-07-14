import React from 'react'

export default function Brokerage() {
  let styles={width:"70%"}
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col p-5">
          <img src="images/pricingEquity.svg" alt="Free equity delivery" style={styles}/>
          <h3>Free equity delivery</h3>
          <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col p-5">
          <img src="images/pricing20.svg" alt="Intraday and F&O trades"  style={styles}/>
          <h3>Intraday and F&O trades</h3>
          <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col p-5">
          <img src="images/pricingMF.svg" alt="Free direct MF" style={styles} />
          <h3>Free direct MF</h3>
          <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  )
}
