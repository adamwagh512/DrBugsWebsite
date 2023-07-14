import React from 'react'
import twomen from '../assets/2men.jpg'
import {FaPhone} from 'react-icons/fa'
import {FiMail} from 'react-icons/fi'
const Home = () => {
  return (
    <div className='flex flex-wrap'>
      <img src={twomen} className='max-w-full md:max-w-[50%]'/>
      <div className='bg-green-400 w-[100vw] md:w-[50%] text-[35px] md:px-20'>
        <p>Your Reliable </p>
        <p className='text-[60px] font-bold'>Exterminators</p>
        <p>Providing Top-Quality Pest Control Services since 1990</p>
        <div className='flex justify-center md:px-20 py-20'>
        <button className='bg-orange-400 rounded-3xl px-10 py-4 flex justify-between items-center mx-3'><FaPhone size={20} /><text className='px-3'>Call</text> </button>
        <button className='bg-orange-400 rounded-3xl px-10 py-4 flex justify-between items-center mx-3'><FiMail size={20} /><text className='px-3'>Email</text> </button>
        </div>
      </div>
      
    </div>
  )
}

export default Home