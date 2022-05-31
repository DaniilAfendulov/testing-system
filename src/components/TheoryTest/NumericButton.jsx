import React from 'react'

function NumericButton({onClick, text}) {
  return (
    <div onClick={onClick}>
        <span>{text}</span>
    </div>
  )
}

export default NumericButton