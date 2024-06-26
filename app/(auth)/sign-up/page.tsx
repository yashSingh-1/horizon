import AuthForm from '@/components/AuthForm'
import React from 'react'

const Signup = async () => {
  
  return (
    <div className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up" />
    </div>
  )
}

export default Signup
