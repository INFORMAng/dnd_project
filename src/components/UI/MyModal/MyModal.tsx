import React, { FC } from 'react'
import cl from './MyModal.module.scss'
import { useSelector } from 'react-redux'
import { getModalState } from '../../../store/selectors/modalSelectors'
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch/useAppDispatch'
import { closeModal } from '../../../store/slices/modalSlice'

const MyModal: FC = () => {
  const dispatch = useAppDispatch()
  const {isOpen, content} = useSelector(getModalState)
  
  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  if(!isOpen) return null

  return (
    <div className={cl.myModal} onClick={handleCloseModal}>
      <div className={cl.myModalContent} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  )
}

export default MyModal