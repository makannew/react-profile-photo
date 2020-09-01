import React, { useContext, useEffect } from 'react'
import Context from '../context/context'
import { useLinkedState } from 'use-linked-state'
import { Source } from '../types and defaults/source-default'
import { ImgSrc } from '../types and defaults/img-src-default'

interface SrcManager {
  photoSrc: string
}
export const SrcManager: React.FC<SrcManager> = ({ photoSrc }) => {
  const { sourceGateway, imgSrcGateway } = useContext(Context)!
  const [source]: [Source] = useLinkedState(sourceGateway)
  const [imgSrc, setImgSrc]: [ImgSrc, (value: ImgSrc) => void] = useLinkedState(
    imgSrcGateway
  )

  const { avatarSrc } = source
  useEffect(() => {
    let currentSrc = ''
    if (photoSrc) {
      currentSrc = photoSrc
    } else if (avatarSrc) {
      currentSrc = avatarSrc
    }
    if (currentSrc !== imgSrc) {
      setImgSrc(currentSrc)
    }
  }, [source, photoSrc])

  return null
}
