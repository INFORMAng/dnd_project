import React, {memo, Suspense, useCallback} from 'react'
import {Route, RouteProps, Routes} from 'react-router-dom'
import { routeConfig } from '../router/routeConfig'
// Здесь можно вставить в fallback компонент загрузки fallback={<PageLoader />}
// Это означет, что пока компонент не загрузится, то он будет показывать fallback
const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback="Loading...">
                {route.element}
            </Suspense>
        )

        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
                />
        )
    })

  return (
    <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  )
}
  
export default memo(AppRouter)