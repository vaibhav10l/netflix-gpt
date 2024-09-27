import React from 'react'

const TitleComponent = ({title,overview}) => {
  return (
    <div className='w-[30%] pt-36 text-justify px-12 absolute bg-gradient-to-r from-black  text-white'>
        <h1 className='text-4xl font-bold mb-2'>{title}</h1>
        <p>{overview}</p>
        <div className='mt-2'>
        <button className='bg-white py-1 text-black px-12 p-4 rounded-xl hover:opacity-80'>Play</button>
        <button className='bg-white py-1 text-black px-12 rounded-xl ml-2 hover:opacity-80'>More Info</button>
        </div>
    </div>
  ) 
}

export default TitleComponent