import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const SingleProduct = () => {
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/products/" + 5);
  };
  
  return (
    <div>
      <h2>SingleProduct - {id}</h2>
      <button onClick={handleBack}>Go Back</button>
    </div>
  )
}

export default SingleProduct