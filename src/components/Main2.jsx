import React from 'react'
import img1 from '../assets/Google_2015_logo 1.png'
import img2 from '../assets/1920px-Avast_Software_logo_2016 1.png'
import img3 from '../assets/pngegg 1.png'
import img4 from '../assets/paypal-784403_960_720-removebg-preview 1.png'
import img5 from '../assets/Style-Guide---Homepage.png'
const Main2 = () => {
    return (
        <div className='pt-[40px]  h-[130px] bg-[rgb(195,255,235)]'>
            <div className='max-w-full   w-[85%] mx-auto '>
                <div className='flex items-center justify-center gap-[60px]'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Main2