import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DashboardsRoutes } from './DashboardsRoutes'

export const PortfolioRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/*' element ={<DashboardsRoutes/>}/>
        </Routes>
    </BrowserRouter>
  )
}
