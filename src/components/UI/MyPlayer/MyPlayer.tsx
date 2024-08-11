import React, { memo } from 'react'
import { Rnd } from 'react-rnd'
import cl from "./MyPlayer.module.css"

interface MyPlayerProps {
  key: string;
  name: string;
}

const MyPlayer = (props: MyPlayerProps) => {
  const {name} = props
  return (
    <Rnd enableResizing={false}>
      <div className={cl.myPlayer}>{name}</div>
    </Rnd>
  )
}

export default memo(MyPlayer)