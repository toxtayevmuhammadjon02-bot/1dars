import React from 'react'
import img from '../assets/Daco_4455921 1.png'
import img2 from '../assets/Daco_4455921 2.png'
import img3 from '../assets/laptop image.png'
const Main = () => {
    return (
        <div className='max-w-full items-center mx-auto w-[85%] flex pt-[40px]'>
            <div className="right">
                <div>
                    <p className='text-[40px] w-[400px] font-bold'>Develop Your Life With <span className='text-red-500'>One Step.</span> </p>
                </div>
                <div className='pt-[10px]'>
                    <p>Pushing the possibilities of the internet. Good for </p>
                    <p>the last software. Make it A software night.</p>
                </div>
                <div className='pt-[20px]'>
                    <div className="join">
                        <div>
                            <label className="input validator join-item">

                                <input type="email" placeholder="eneter your email" required />
                            </label>
                        </div>
                        <button className="btn btn-neutral join-item">Join</button>
                    </div>
                </div>
            <div className='flex pt-[10px] gap-[10px]'>
                <div className=' '>
                    <img src={img} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
            </div>
            </div>


            <div>
                <img src={img3} alt="" />
            </div>

        </div>
    )
}

export default Main