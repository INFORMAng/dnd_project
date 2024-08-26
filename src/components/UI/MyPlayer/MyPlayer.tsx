import React, { memo } from 'react'
import { Rnd } from 'react-rnd'
import cl from "./MyPlayer.module.scss"

interface MyPlayerProps {
  key: string;
  name: string;
}

const MyPlayer = (props: MyPlayerProps) => {
  const {name} = props
  return (
    <Rnd bounds="parent" enableResizing={false}>
      <div className={cl.myPlayer}>{name}</div>
    </Rnd>
  )
}

export default memo(MyPlayer)