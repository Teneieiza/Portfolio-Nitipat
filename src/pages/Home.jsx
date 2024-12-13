import React from 'react'
import Allcomponents from '../components/Allcomponents'

const Home = () => {
  return (
    <div className='flex justify-center px-[150px] py-[50px] gap-10 bg-[#111111] flex-col xl:flex-row'>
      <div className='w-[100%] h-[100%] rounded-tr-3xl'>
        <Allcomponents />
      </div>
    </div>
  )
}

export default Home
