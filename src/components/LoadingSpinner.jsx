import React from 'react'

function LoadingSpinner() {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 h-100'>
        <div className='spinner-border' style={{height:'10em', width:'10em'}}></div>
    </div>
  )
}

export default LoadingSpinner