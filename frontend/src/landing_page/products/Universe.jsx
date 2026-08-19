import React from 'react'
import UniverseCard from './UniverseCard'

export default function Universe() {
  return (
    <div className="container p-5">
        <div className='text-center'>
            <p className='fs-5 mb-5'>
                Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/">Zerodha.tech</a> blog.
            </p>
            <h3 className='mb-4'>The Zerodha Universe</h3>
            <p>Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="row p-5">
            <UniverseCard imageUrl="images/zerodhaFundhouse.png" description="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."/>
            <UniverseCard imageUrl="images/sensibullLogo.svg" description="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."/>
            <UniverseCard imageUrl="images/tijori.svg" description="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."/>
        </div>
        <div className="row">
            <UniverseCard imageUrl="images/streakLogo.png" description="Systematic trading platform that allows you to create and backtest strategies without coding."/>
            <UniverseCard imageUrl="images/smallcaseLogo.png" description="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."/>
            <UniverseCard imageUrl="images/dittoLogo.png" description="Personalized advice on life and health insurance. No spam and no mis-selling."/>  
        </div>
        <button className='btn btn-primary btn-lg pt-2 pb-2 fs-5  d-flex justify-center' style={{width:"17%",margin:"auto"}} >Sign up for free</button>
    </div>
  )
}
