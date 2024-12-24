import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {


    const {aToken, setAToken} = useContext(AdminContext)
    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-[155px] text-sm'>
        <div className="w-[100px] cursor-pointer flex items-center text-3xl">
            <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin1_logo} alt="" />
            <p className='text-primary font-bold'>MediMeet</p>
        </div>
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-white text-sm font-bold px-10 py-3 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
