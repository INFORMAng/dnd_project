import React, { ButtonHTMLAttributes, FC, memo } from 'react'
import cl from './MyButton.module.scss'
import classNames from 'classnames';

export enum BUTTON_SIZE_TYPE {
  S = "small",
  M = "medium",
  L = "large",
}

export enum BUTTON_THEME_TYPE {
  DEFAULT = 'default',
}

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size: BUTTON_SIZE_TYPE;
  theme: BUTTON_THEME_TYPE;
}



const MyButton: FC<MyButtonProps> = (props) => {
  const {onClick, children, size, theme} = props

  return (
    <button 
      className={classNames(cl.myButton, cl[size], cl[theme])} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  )
}

export default memo(MyButton)