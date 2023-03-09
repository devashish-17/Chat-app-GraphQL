import { signIn } from 'next-auth/react';
import React, { useState } from 'react'

const login = () => {

    const [authState, setAuthState] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleFieldChange = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        signIn()
    }

  return (
    <div>
        <form className='grid justify-center items-center' onSubmit={handleFieldChange}>
            <input 
                type="email"
                placeholder='Email'
                className='border-2 border-gray-400 h-10 w-60 rounded-md px-2 m-2'
                onChange={handleFieldChange} value={authState.email}
            />
            <input 
                type="text"
                placeholder='Username'
                className='border-2 border-gray-400 h-10 w-60 rounded-md px-2 m-2'
                onChange={handleFieldChange} value={authState.username}
            />
            <input 
                type="password"
                placeholder='Password'
                className='border-2 border-gray-400 h-10 w-60 rounded-md px-2 m-2'
                onChange={handleFieldChange} value={authState.password} 
            />
            <button 
                type="submit"
                className='border-2 border-gray-400 h-10 w-60 rounded-md px-2 m-2'
            >
                Login
            </button>
        </form>
    </div>
  )
}

export default login