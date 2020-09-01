export type Crop = {
  ctx: CanvasRenderingContext2D | null
  canvasSrc: HTMLImageElement | null
  cssWidth: number
  cssHeight: number
  centerX: number
  centerY: number
  x: number
  y: number
  imgWidth: number
  imgHeight: number
  width: number
  height: number
  rotation: number
  scale: number
}

export const CropDefault = <Crop>{
  ctx: null,
  canvasSrc: null,
  cssWidth: 0,
  cssHeight: 0,
  centerX: 0,
  centerY: 0,
  x: 0,
  y: 0,
  imgWidth: 0,
  imgHeight: 0,
  width: 0,
  height: 0,
  rotation: 0,
  scale: 1
}
