import React, { useContext } from 'react'
import Context from '../context/context'

export const PhotoLoader = () => {
  const { photo } = useContext(Context)!
  return (
    <div>
      <h3>Photo Loader: {photo}</h3>
    </div>
  )
}
