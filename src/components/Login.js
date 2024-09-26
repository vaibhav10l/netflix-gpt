import React, { useState } from 'react'
import Header from './Header'
import { commonValidation, regex } from '../utils/commonValidation'
import { commonValidationMsg } from '../utils/commonValidation';
import {string} from 'yup'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { NetFlix_bg_image } from '../utils/constant';
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const initialValue = {
        email: "",
        password: ""

    }
    const [name, setName] = useState("")
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
            name: string().when([], {
                is: () => !isSignInForm,
                then: (schema) => schema.matches(regex.name, commonValidationMsg.name).required("Name is Required"),
                otherwise: (schema) => schema.notRequired(),
            })

        }
        return schema;
    }
    const handleOnClick = () => {
        let fieldValue;
        if (isSignInForm) fieldValue = states
        else fieldValue = { ...states, name: name }
        console.log({ ...states, name: name })
        commonValidation({
            field: userSchema(),
            fieldValue: fieldValue
        }).then((res) => {
            if (res === true) {
                setError({});
                if (!isSignInForm) {
                    // Sign-up logic
                    createUserWithEmailAndPassword(auth, states.email, states.password)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            console.log(user)
                        })
                        .catch((err) => {
                            const errorCode = err.code;
                            const errorMessage = err.message;
                            console.log(errorCode, "+", errorMessage)
                        })

                } else {
                    // Sign-In logic
                    signInWithEmailAndPassword(auth, states.email, states.password)
                        .then((userCredential) => {
                            // Signed in 
                            const user = userCredential.user;
                            // ...
                           console.log(user)
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorCode, "+", errorMessage)
                        });

                }
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
                <img src={NetFlix_bg_image}
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
                <p> {isSignInForm ? "New to Netflix ? " : "Already registered ? "} <span className='text-yellow-500 cursor-pointer' onClick={toggleForm}>{isSignInForm ? "Sign Up Now" : "Sign In"}</span></p>
            </form>
        </div>
    )
}

export default Login