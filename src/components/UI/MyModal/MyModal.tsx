import React, { FC, ReactNode } from 'react'
import cl from './MyModal.module.scss'
import { useSelector } from 'react-redux'
import { getModalState } from '../../../store/selectors/modalSelectors'
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch/useAppDispatch'
import { closeModal } from '../../../store/slices/modalSlice'

interface IModalProps {
  children?: ReactNode;
}

const MyModal: FC<IModalProps> = ({children}) => {
  const dispatch = useAppDispatch()
  const {isOpen} = useSelector(getModalState)
  
  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  if (!isOpen) return null

  return (
    <div className={cl.myModal} onClick={handleCloseModal}>
      <div className={cl.myModal__content} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal