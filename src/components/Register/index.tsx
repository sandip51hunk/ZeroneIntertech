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
          <div className='bg-secondary flex gap-20 mt-28'>
          
            <div className='py-2 px-4 border-solid border-2 rounded'>1</div>
            <span>sdasd</span>
            <div>2</div>
            <span>sdasda</span>
            <div>3</div>
            <span>sdasd</span>
            <div>4</div>
          </div>
          <form className='p-10 border-solid border-2'>
          <h1 className='title-font text-3xl font-bold pb-2'>Register</h1>
            <p className='pb-2 text-base'>Enter your mobile number to continue.</p>
            <div className="relative mb-4">
              <label htmlFor="number" className="">
                Mobile Number
              </label>
              <input
                className=''
                type="text"
              />
              <button className="">
                Continue
              </button>
              <p>Already have an account?<a onClick={() => navigate('/login')}> Login</a></p>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default Register