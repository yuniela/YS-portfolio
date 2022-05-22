import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ResumeScreen } from '../components/portfolio/ResumeScreen'
import { Contact } from '../components/ui/Contact'
import { Home } from '../components/ui/Home'
// import { Navbar } from '../components/ui/Navbar'
import { NavBarOp } from '../components/ui/NavBarOp'
import { Projects } from '../components/ui/Projects'

export const DashboardsRoutes = () => {
    return (
        <>
            {/* <Navbar/> */}
            <NavBarOp/>
            <div className="container-fluid position-relative">
                <Routes>
                    <Route path= '/' element={<Home/>}/>
                    <Route path= '/projects' element={<Projects/>}/>
                    <Route path= '/resume' element={<ResumeScreen/>}/>
                    <Route path= '/contact' element={<Contact/>}/>
    
                </Routes>
            </div>
        </>
      )
}
