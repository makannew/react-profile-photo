import React from 'react'

type ProfileContext = {
  sourceGateway: any
  cropGateway: any
  imgSrcGateway: any
  canvasSrcGateway: any
}

const Context = React.createContext<ProfileContext | undefined>(undefined)

export default Context
