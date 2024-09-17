import React, { FC, memo, ReactNode } from 'react'
import cl from './MyModal.module.scss'
import { useSelector } from 'react-redux'
import { getModalState } from '../../../store/selectors/modalSelectors'
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch/useAppDispatch'
import { closeModal } from '../../../store/slices/modalSlice'
import { StateSchema } from '../../../store/config/stateSchema'

export enum MODAL_SIZE_TYPE {
  FULL_SCREEN = 'myModal__full_screen',
  FLEX_SCREEN = 'myModal__flex__screen'
}

export enum MODAL_CONTENT_TYPE {
  MARKER_FORM = 'characterMarkerForm',
  MARKER_MENU = 'mapMarkerMenu',
}

interface IModalProps {
  children?: ReactNode;
  size: MODAL_SIZE_TYPE;
  id: string;
}

const MyModal: FC<IModalProps> = (props) => {
  const {children, size, id} = props
  const dispatch = useAppDispatch()
  const modalState = useSelector((state: StateSchema) => getModalState(state, id))
  
  if (!modalState) return null 
  
  const {isOpen, position} = modalState
  
  const handleCloseModal = () => {
    dispatch(closeModal(id))
  }

  if (!isOpen) return null

  return (
    <div className={cl[size]} style={position} onClick={handleCloseModal}>
      <div className={cl.content} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default memo(MyModal)