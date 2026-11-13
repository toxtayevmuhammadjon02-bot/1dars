import React from 'react'
import img from '../assets/1458 copy 1.png'
const Main5 = () => {
    return (
        <div className='bg-[rgb(190,244,226)]'>
            <div className='max-w-full w-[85%] justify-center flex items-center  mx-auto'>
                <div>
                    <p className='text-[40px] w-[400px] font-bold' >Get our software</p>

                    <div className='pt-[20px]'>
                        <p>The source of powerful qorld and making future sure.</p>
                        <p> Its a  straight forward software.</p>
                    </div>

                    <div className='pt-[20px]'>
                        <p>Where possibilities are made possible. We must have </p>
                        <p>expand Possibilities of better tomorrow. The directly </p>
                        <p>secure of your network deliveing  services.</p>
                    </div>

                    <div className='pt-[20px]'>
                        <button class="bg-red-700  text-white rounded-lg p-[10px]">Download now</button>

                    </div>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main5