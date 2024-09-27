import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/store/slice/userSlice';
import { Netflix_logo } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const handleOnClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")

    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  useEffect(()=>{
    const  unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in,
          const {uid,email,displayName} = user
          dispatch(addUser({uid:uid,email:email,displayName:displayName}))
          navigate("/browser")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
      return ()=> unsubscribe();
    });
  },[])
  return (
    <div className='absolute w-screen px-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img className='w-44 '
        src={Netflix_logo}
        alt='netflix-logo' />

      {!!user && (
        <div className='mt-4'>
          <button type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            onClick={handleOnClick}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  )
}

export default Header