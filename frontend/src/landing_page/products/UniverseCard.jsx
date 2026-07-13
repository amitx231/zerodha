import React from 'react'

export default function UniverseCard({imageUrl,description}) {
  return (
        <div className="col text-center p-5">
                <img src={imageUrl} style={{width: "50%"}} className="mb-3" alt="Uninverse card image"/>
                <p className="card-text px-4"  style={{fontSize:"0.9rem"}}>{description}</p>
        </div>
  )
}
