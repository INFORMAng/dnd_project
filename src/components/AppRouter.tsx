import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../router/routes'

const AppRouter = () => {
  return (
    <Routes>
      {routes.map(route => 
        <Route 
          path={route.path} 
          Component={route.component} 
          key={route.path}
        />
      )}
      <Route path='*' element={<Navigate to={'/about'}/>}/>
    </Routes>
  )
}
  
export default AppRouter