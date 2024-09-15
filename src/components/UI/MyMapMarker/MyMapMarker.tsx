import React, { memo } from 'react'
import { Rnd } from 'react-rnd'
import cl from "./MyMapMarker.module.scss"
import classNames from 'classnames';
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch/useAppDispatch';
import { closeAllModals, openModal } from '../../../store/slices/modalSlice';

interface IMyMapMarkerProps {
  id: string;
  index: number;
  name: string;
  color: string;
  size: string;
}

const MyMapMarker = (props: IMyMapMarkerProps) => {
  const {id, name, color, size, index} = props
  const dispatch = useAppDispatch()
  let markerRndSize = 0

  const OpenMapMarkerMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const {clientX: x, clientY: y} = event
    dispatch(closeAllModals())
    dispatch(openModal({id: `markerMenu_${id}`, position: { top: y, left: x }}))
  }
    
  switch (size) {
    case 'small': 
      markerRndSize = 25
    case 'medium':
      markerRndSize = 50
    case 'large':
      markerRndSize = 75
    case 'extra_large':
      markerRndSize = 100
  }

  return (
    <Rnd 
      bounds="parent"
      enableResizing={false}
      default={{
        x: 0,
        y: index*50,
        width: markerRndSize,
        height: markerRndSize,
      }}
    >
      <div 
        className={classNames(cl.myMapMarker, cl[color], cl[size])} 
        onContextMenu={OpenMapMarkerMenu}
      >
        {name}
      </div>
    </Rnd>
  )
}

export default memo(MyMapMarker)