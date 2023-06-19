import React from 'react'

const CardDetails = ({imgHeader,header,discription,price,btnContent,list}) => {
  return (
    <div>
        <img src={imgHeader} alt="" />
        <h1>{header}</h1>
    </div>
  )
}

export default CardDetails