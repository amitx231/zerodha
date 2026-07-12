import React from 'react'
import { Link } from 'react-router-dom'
export default function Team() {
  return (
    <div className="container p-5">
        <div className="row border-top">
           
            <div className="col text-muted"  style={{paddingTop:"7rem"}}>
                <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>

                <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>

            </div>
            <div className="col text-muted"  style={{paddingTop:"7rem"}}>
                <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
            </div>

        </div>
        <h3 className='text-center my-5'>People</h3>
        <div className="row pt-5">
            <div className="col-5 text-center">
                <img src="images/nithinKamath.jpg"style={{width:"60%" , borderRadius:"50%"}} alt="Nithin-Kamath" />
                <h5 className='mt-4 text-muted'>Nithin Kamath</h5>
                <p className='text-muted'>Founder , CEO</p>
            </div>
            <div className="col Team-link">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                <p>Playing basketball is his zen.</p>

                Connect on <Link to="/">HomePage</Link> / <Link to="/tradingQnA">TradingQnA</Link> / <Link to="/twitter">Twitter</Link>
            </div>
        </div>
    </div>
  )
}
