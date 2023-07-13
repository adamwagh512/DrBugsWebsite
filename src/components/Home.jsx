import React from 'react'
import twomen from '../assets/2men.jpg'
const Home = () => {
  return (
    <div className='flex flex-wrap'>
      <img src={twomen} className='max-w-full md:max-w-[50%]'/>
      <div className='bg-green-400 w-[100vw] md:w-[50%]'>
        <h2>dfadf </h2>
      </div>
    </div>
  )
}

export default Home