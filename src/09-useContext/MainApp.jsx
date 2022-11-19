import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { AboutPage } from './AboutPage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'
export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main Page</h1>
      <Navbar/>
      <hr />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
       

        {/* <Route path='/*' element={<LoginPage />}></Route> */}
        <Route path='/*' element={<Navigate to='/login'/>}></Route>
      </Routes>
    </UserProvider>
  )
}
