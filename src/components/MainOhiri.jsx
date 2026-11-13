import React from 'react'
import img from '../assets/Price bar.png'
const MainOhiri = () => {
  return (
    <div className='max-w-full w-[85%] mx-auto pt-[50px]'>
        <div className='flex justify-center'>
            <p className='text-[45px] font-bold'>Best Pricing Plan</p>

        </div>
        <div className='flex justify-center flex-col items-center pt-[20px]'>
            <p >Empowering the Internet Generation. Driving the Communication Revolution.</p>
            <p> Technology at the speed of life. Empowered by Innovation.</p>
        </div>
        <div className='flex justify-center gap-[20px] items-center pt-[10px]' >
            <p>Monthly</p>
            <p>Quarterly</p>
        </div>
        <div className='flex justify-center pt-[10px]'>
            <p>Save up to 40%</p>
        </div>
        <div>
            <img src={img} alt="" />
        </div>
    
    </div>
  )
}

export default MainOhiri