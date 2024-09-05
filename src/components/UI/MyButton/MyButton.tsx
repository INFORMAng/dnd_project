import React, { ButtonHTMLAttributes, FC } from 'react'
import cl from './MyButton.module.scss'

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  buttonClasses?: string[];
}


const MyButton: FC<MyButtonProps> = ({onClick, children, buttonClasses, ...props}) => {
  const rootClasses = [cl.myButton]

  if (buttonClasses) {
    buttonClasses.forEach(param => rootClasses.push(cl[param]))
  }

  return (
    <button 
      className={rootClasses.join(' ')} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  )
}

export default MyButton