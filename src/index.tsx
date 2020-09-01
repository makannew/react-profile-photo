import React from 'react'
import { ImgPhoto } from './components/img'
import Context from './context/context'
import { useStateGateway } from 'use-linked-state'
import { CropDefault } from './types and defaults/crop-default'
import { SourceDefault } from './types and defaults/source-default'
import { SrcManager } from './components/src-manager'
import { ImgSrcDefault } from './types and defaults/img-src-default'
import { CanvasSrcDefault } from './types and defaults/canvas-src-default'
import { Draw } from './components/draw'
export { Photo } from './components/photo'
export { Avatar } from './components/avatar'
// export { PhotoLoader } from './components/photo-loader'

export interface ProfilePhoto {
  readonly className?: string
  readonly src: string
}

const ProfilePhoto: React.FC<ProfilePhoto> = ({ className, src, children }) => {
  const cropGateway = useStateGateway(CropDefault)
  const sourceGateway = useStateGateway(SourceDefault)
  const imgSrcGateway = useStateGateway(ImgSrcDefault)
  const canvasSrcGateway = useStateGateway(CanvasSrcDefault)
  return (
    <div className={className}>
      <Context.Provider
        value={{
          cropGateway,
          sourceGateway,
          imgSrcGateway,
          canvasSrcGateway
        }}
      >
        <SrcManager photoSrc={src} />
        <ImgPhoto />
        <Draw />
        {children}
      </Context.Provider>
    </div>
  )
}

export default ProfilePhoto
