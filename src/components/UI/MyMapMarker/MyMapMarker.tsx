import React, { memo } from 'react'
import { Rnd } from 'react-rnd'
import cl from "./MyMapMarker.module.scss"
import classNames from 'classnames';
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch/useAppDispatch';
import { closeAllModals, openModal } from '../../../store/slices/modalSlice';
import { MARKER_SIZE_TYPE } from '../../../types/mapMarker';

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
  const markerRndSize = getMarkerRndSize(size)
  
  function getMarkerRndSize(size: string) {
    switch (size) {
      case MARKER_SIZE_TYPE.S: 
        return 25
      case MARKER_SIZE_TYPE.M:
        return 50
      case MARKER_SIZE_TYPE.L:
        return 75
      case MARKER_SIZE_TYPE.XL:
        return 100
    }
  }

  const OpenMapMarkerMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault()
    const {clientX: x, clientY: y} = event
    dispatch(closeAllModals())
    dispatch(openModal({id: `markerMenu_${id}`, position: { top: y, left: x }}))
  }

  if (!markerRndSize) return null

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