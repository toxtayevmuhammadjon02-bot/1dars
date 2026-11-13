import React from 'react'
import img from '../assets/Group 9.png'
import img2 from '../assets/Group 68.png'
const Main3 = () => {
    return (
        <div className='max-w-full flex pl-[100px]  justify-center items-center w-[85%] mx-auto pt-[90px]'>
            <div className='flex flex-col justify-center'>
                <p className='text-[40px] font-bold w-[400px]'>Discover & growth with analysis.</p>

                <div className='pt-[20px]'>
                    <p>Software with new dimensions. The better future </p>
                    <p>and information about the virtual world.</p>
                </div>
                <div className='flex pt-[10px] gap-[5px]'>
                    <img src={img} alt="" />
                    <p>Software with new dimensions the better.</p>
                </div>
                <div>
                    <div className='flex pt-[10px] gap-[5px]'>
                        <img src={img} alt="" />
                        <p>Effortlessly manages all your information.</p>
                    </div>
                </div>
                <div className='flex pt-[10px] gap-[5px]'>
                    <img src={img} alt="" />
                    <p>Simple Solutions for Complex Connections.</p>
                </div>
                 <div className='flex pt-[10px] gap-[5px]'>
                    <img src={img} alt="" />
                    <p>Complete business solutions for customers.</p>
                </div>
            </div>
            <div>
                <img src={img2} alt="" />
            </div>

        </div>
    )
}

export default Main3