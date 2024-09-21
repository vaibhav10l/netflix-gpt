import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const[isSignInForm , setIsSignInForm] = useState(true);

    const toggleForm  = ()=>{
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg'
                    alt='netflix-background-img' />

            </div>
            <form className='w-3/12 absolute bg-black p-12 py-4 my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg'>
              <h1 className='font-bold text-3xl py-4'> {isSignInForm ?  "Sign In" : "Sign Up" }</h1>
              {
                !isSignInForm && 
                <input 
                className='w-full p-4 my-4 bg-gray-600' 
                type="text" 
                placeholder='Full Name'/>
              }
                <input 
                className='w-full p-4 my-4 bg-gray-600' 
                type="text" 
                placeholder='Email Id'/>
                <input className='w-full p-4 my-4 bg-gray-600' 
                type='password' 
                placeholder='Password' /> 

                <button className='bg-red-600 w-full my-6 p-4 rounded-lg'>
                    {isSignInForm ?  "Sign In" : "Sign Up"}
                </button>
                <p> {isSignInForm ?  "New to Netflix ? " : "Already registered ? "} <span className='text-yellow-500' onClick={toggleForm}>{isSignInForm ?  "Sing Up Now" : "Sign In"}</span></p>
            </form>
        </div>
    )
}

export default Login