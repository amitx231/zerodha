import React from 'react'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className="container p-5 text-center">
        <div className="row p-5">
            <h1>404 Page Not Found</h1>
            <p>Sorry , The page you are looking for does not exist.</p>
            <Link to="/"  className='mt-5' style={{textDecoration:"none" , fontSize:"1.5rem"}}>Go to HOME</Link>  
        </div>
    </div>
  )
}
