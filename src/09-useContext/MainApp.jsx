import { Routes, Route, Navigate } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
export const MainApp = () => {
  return (
    <>
      <h1>Main Page</h1>
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
       

        {/* <Route path='/*' element={<LoginPage />}></Route> */}
        <Route path='/*' element={<Navigate to='/login'/>}></Route>
      </Routes>
    </>
  )
}
