import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  
  return (
    <div>SingleProduct - {id} </div>
  )
}

export default SingleProduct