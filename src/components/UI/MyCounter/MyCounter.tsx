import React, { memo } from 'react'
import cl from "./MyCounter.module.css"

const Counter = () => {
  return (
    <div className={cl.counterWrapper}>
      <button className={cl.counter}>+</button>
      <button className={cl.counter}>-</button>
    </div>
  )
}

export default memo(Counter)