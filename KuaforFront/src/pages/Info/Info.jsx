import React from 'react'
import { useParams } from "react-router-dom";

function Info() {
  const { id} = useParams();
  return (
    <div>Numara: {id} </div>
  )
}

export default Info

