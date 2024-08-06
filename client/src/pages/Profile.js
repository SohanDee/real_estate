import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img className='rounded-full h-30 w-30 object-cover cursor-pointer self-center mt-2' src={currentUser.avatar} alt='Profile_image' />
        <input className='rounded-lg border p-3' type='text' placeholder='username'id='username' />
        <input className='rounded-lg border p-3' type='email' placeholder='email' id='email'/>
        <input className='rounded-lg border p-3' type='password' placeholder='password' id='password'/>
        <button className='rounded-lg p-3 uppercase text-white hover:opacity-90 disabled:opacity-70 bg-green-700'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}
