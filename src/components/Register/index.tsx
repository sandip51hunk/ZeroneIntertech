import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../Navigation/Header/Header'

function Register() {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className="text-gray-600 flex justify-center items-center body-font relative">
        <div>
          <div className='flex gap-20 mt-24 mb-8 items-center '>
            <div className='py-2 px-4 border-solid border-2 rounded cursor-pointer'>1</div>
            <span>sdasd</span>
            <div className='py-2 px-4 border-solid border-2 rounded cursor-pointer'>2</div>
            <span>sdasda</span>
            <div className='py-2 px-4 border-solid border-2 rounded cursor-pointer'>3</div>
            <span>sdasd</span>
            <div className='py-2 px-4 border-solid border-2 rounded cursor-pointer'>4</div>
          </div>
          <form className='p-10 border-solid border-2'>
            <h1 className='title-font text-3xl font-bold mb-2'>Register</h1>
            <p className='mb-7 text-base'>Enter your mobile number to continue.</p>
            <div className="relative mb-4">
              <label htmlFor="number" className="">
                Mobile Number
              </label><br />
              <input
                className='p-1.5 w-full border mb-7 rounded'
                type="text"
              /><br />
              <button className="mb-5 p-1.5 w-full border rounded">
                Continue
              </button>
              <p>Already have an account?<a className='cursor-pointer text-red-500' onClick={() => navigate('/login')}> Login</a></p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register