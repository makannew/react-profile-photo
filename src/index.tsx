import React from 'react'
import ImgPhoto from './components/img-photo'
import Context from './components/context'
export { PhotoLoader } from './components/photo-loader'
//
interface Props {
  className: string
  photoSrc: string
}

export const ProfilePhoto: React.FC<Props> = ({
  className,
  photoSrc,
  children
}) => {
  return (
    <div className={className}>
      <Context.Provider value={{ photoSrc }}>
        <ImgPhoto />
        {children}
      </Context.Provider>
    </div>
  )
}
