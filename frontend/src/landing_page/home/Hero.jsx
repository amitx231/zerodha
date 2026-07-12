import React from 'react';

export default function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center d-flex justify-content-center'>
                <img src="images/homeHero.png" style={{width:"90%"}} alt="Home page" className='mb-4' />
                <h1>Invest in everything</h1>
                <p className='fs-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary btn-lg pt-2 pb-2 fs-5 mt-3' style={{width:"17%",margin:"auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}
