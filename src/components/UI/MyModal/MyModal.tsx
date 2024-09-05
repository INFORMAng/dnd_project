import React, { FC } from 'react'
import cl from './MyModal.module.scss'
import { useSelector } from 'react-redux'
import { getModalState } from '../../../store/selectors/modalSelectors'
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch/useAppDispatch'
import { closeModal } from '../../../store/slices/modalSlice'
import CharacterMarkerForm from '../../CharacterMarkerForm'
import { MODAL_CONTENT_TYPE } from '../../../types/modalTypes'

const MyModal: FC = () => {
  const dispatch = useAppDispatch()
  const {isOpen, contentType} = useSelector(getModalState)
  
  const renderContent = () => {
    switch(contentType) {
      case(MODAL_CONTENT_TYPE.MARKER_FORM):
        return <CharacterMarkerForm/>;
      default:
        return null;
    }
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  if (!isOpen) return null

  return (
    <div className={cl.myModal} onClick={handleCloseModal}>
      <div className={cl.myModal__content} onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        {renderContent()}
      </div>
    </div>
  )
}

export default MyModal