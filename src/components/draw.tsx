import React, { useContext, useEffect } from 'react'
import Context from '../context/context'
import { useLinkedState } from 'use-linked-state'
import { Crop } from '../types and defaults/crop-default'

export const Draw: React.FC = () => {
  const { cropGateway } = useContext(Context)!
  const [crop]: [Crop] = useLinkedState(cropGateway)

  useEffect(() => {
    if (!crop.canvasSrc) return
    const {
      ctx,
      canvasSrc,
      x,
      y,
      width,
      height,
      rotation,
      imgWidth,
      imgHeight,
      scale
    } = crop
    ctx!.setTransform(1, 0, 0, 1, 0, 0)
    ctx!.clearRect(0, 0, width, height)

    ctx!.translate(width / 2, height / 2)
    ctx!.scale(scale, scale)
    ctx!.rotate(rotation)
    ctx!.translate(-width / 2, -height / 2)
    ctx!.translate(x, y)

    // canvas img x,y,w,h in Safari can not bigger than image size

    ctx!.drawImage(canvasSrc, 0, 0, imgWidth, imgHeight, 0, 0, width, height)
  })
  return null
}
