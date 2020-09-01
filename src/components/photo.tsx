import React, { useContext, useEffect, useRef } from 'react'
import { useLinkedState } from 'use-linked-state'
import Context from '../context/context'
import { Crop } from '../types and defaults/crop-default'
import { CanvasSrc } from '../types and defaults/canvas-src-default'

interface Photo {
  readonly className: string
  readonly width?: number
  readonly height?: number
}

export const Photo: React.FC<Photo> = ({
  className,
  width = 512,
  height = 512
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { canvasSrcGateway, cropGateway } = useContext(Context)!
  const [canvasSrc]: [CanvasSrc] = useLinkedState(canvasSrcGateway)
  const [, setCrop]: [
    Crop,
    (value: (value: Crop) => void) => void
  ] = useLinkedState(cropGateway)

  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!
    const naturalWidth = canvasSrc.naturalWidth
    const naturalHeight = canvasSrc.naturalHeight
    const ratio = height / width
    const imgX =
      naturalWidth * ratio < naturalHeight
        ? -(naturalHeight - naturalWidth * ratio) / 2
        : 0
    const imgY =
      naturalHeight / ratio < naturalWidth
        ? -(naturalWidth - naturalHeight / ratio) / 2
        : 0
    const imgWidth =
      naturalWidth * ratio < naturalHeight
        ? naturalHeight
        : naturalWidth * ratio
    const imgHeight =
      naturalHeight / ratio < naturalWidth
        ? naturalWidth
        : naturalHeight / ratio
    const rect = canvas.getBoundingClientRect()

    setCrop((crop) => ({
      ...crop,
      ctx,
      canvasSrc,
      cssWidth: canvas.offsetWidth,
      cssHeight: canvas.offsetHeight,
      centerX: rect.left + canvas.offsetWidth / 2,
      centerY: rect.top + canvas.offsetHeight / 2,
      width,
      height,
      x: -(imgX * width) / imgWidth,
      y: -(imgY * height) / imgHeight,
      imgWidth: naturalWidth,
      imgHeight: naturalHeight,
      scale: 1,
      rotation: 0
    }))
  }, [canvasSrc, width, height])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={width}
      height={height}
    ></canvas>
  )
}
