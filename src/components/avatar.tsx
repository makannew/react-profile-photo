import React, { useContext, useEffect } from 'react'
import Context from '../context/context'
import { useLinkedState } from 'use-linked-state'
import { Source } from '../types and defaults/Source-default'

interface Avatar {
  src: string
}
export const Avatar: React.FC<Avatar> = ({ src }) => {
  const { sourceGateway } = useContext(Context)!
  const [, setSource]: [
    Source,
    (value: (value: Source) => Source) => void
  ] = useLinkedState(sourceGateway)

  useEffect(() => {
    setSource((Source) => ({ ...Source, avatarSrc: src }))
  }, [src])

  return null
}
