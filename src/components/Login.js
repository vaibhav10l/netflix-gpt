import React, { useState } from 'react'
import Header from './Header'
import { commonValidation, regex } from '../utils/commonValidation'
import { commonValidationMsg } from '../utils/commonValidation';
import {boolean, string} from 'yup'
const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const initialValue = {
        email: "",
        password: ""

    }
    const [name,setName] = useState("")
    const [states, setStates] = useState(initialValue)
    const [error, setError] = useState({});
    const toggleForm = () => {
        setError({});
        setStates(initialValue)
        setName("")
        setIsSignInForm(!isSignInForm);
    }
    const userSchema = () => {
        let schema = {
            email: string().email().matches(regex.email, commonValidationMsg.email).required("Email is Required"),
            password: string().matches(regex.password, commonValidationMsg.password).required("Password is Required"),
            name: string().when([],{
                is: ()=> !isSignInForm,
                then:(schema)=>schema.matches(regex.name,commonValidationMsg.name).required("Name is Required"),
                otherwise:(schema)=>schema.notRequired(),
            })

        }
        return schema;
    }
    const handleOnClick = () => {
        let fieldValue;
        if(isSignInForm) fieldValue = states
        else fieldValue = {...states,name:name}
        console.log({...states,name:name})
        commonValidation({
            field: userSchema(),
            fieldValue: fieldValue
        }).then((res) => {
            if (res === true) {
                setError({});
            } else setError({ ...res })
        })
    }
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setStates({
            ...states,
            [name]: value
        })
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_small.jpg'
                    alt='netflix-background-img' />

            </div>
            <form
                onSubmit={(e) => e.preventDefault(e)}
                className='w-3/12 absolute bg-black p-12 py-4 my-36 mx-auto right-0 left-0 text-white opacity-80 rounded-lg'>
                <h1 className='font-bold text-3xl py-4'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm &&
                    <input
                        className='w-full p-4 my-4 bg-gray-600'
                        type="text"
                        placeholder='Full Name'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />
                }
                {!!error.name ? <p className='text-red-700 font-bold'>{error.name}</p> : null}
                <input
                    name='email'
                    className='w-full p-4 my-4 bg-gray-600'
                    type="text"
                    placeholder='Email Id'
                    value={states.email}
                    onChange={(e) => handleOnChange(e)}
                />
                {!!error.email ? <p className='text-red-700 font-bold'>{error.email}</p> : null}
                <input
                    name='password'
                    className='w-full p-4 my-4 bg-gray-600'
                    type='password'
                    placeholder='Password'
                    value={states.password}
                    onChange={(e) => handleOnChange(e)}
                />
                {!!error.password ? <p className='text-red-700 font-bold'>{error.password}</p> : null}
                <button
                    className='bg-red-600 w-full my-6 p-4 rounded-lg'
                    onClick={handleOnClick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p> {isSignInForm ? "New to Netflix ? " : "Already registered ? "} <span className='text-yellow-500' onClick={toggleForm}>{isSignInForm ? "Sing Up Now" : "Sign In"}</span></p>
            </form>
        </div>
    )
}

export default Login