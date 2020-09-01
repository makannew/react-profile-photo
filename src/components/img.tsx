import React, { useContext, useEffect } from 'react'
import Context from '../context/context'
import { useLinkedState } from 'use-linked-state'
import { ImgSrc } from '../types and defaults/img-src-default'
import { CanvasSrc } from '../types and defaults/canvas-src-default'

export const ImgPhoto: React.FC = () => {
  const { imgSrcGateway, canvasSrcGateway } = useContext(Context)!
  const [imgSrc]: [ImgSrc] = useLinkedState(imgSrcGateway)
  const [, setCanvasSrc]: [null, (value: CanvasSrc) => void] = useLinkedState(
    canvasSrcGateway
  )

  useEffect(() => {
    const img = document.createElement('img')
    img.onload = () => {
      setCanvasSrc(img)
    }
    img.onerror = (err) => {
      console.log(err)
    }
    console.log('imgSrc:', imgSrc)
    img.src = imgSrc
    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [imgSrc])

  return null
}
