import React, { useContext } from 'react'
import Context from '../components/context'

export const PhotoLoader = () => {
  const context = useContext(Context)
  return (
    <div>
      <h3>This is context photoSrc: {context.photoSrc}</h3>
    </div>
  )
}
