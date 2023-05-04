import React from 'react'
import { useParams } from 'react-router-dom'

function SingleCocktail() {

  const {id} = useParams()

  return (
    <div>SingleCocktail {id}</div>
  )
}

export default SingleCocktail