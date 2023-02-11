import { HeadsetMicOutlined, HttpsOutlined, LocalAtmOutlined, LocalShippingOutlined } from '@material-ui/icons'
import React from 'react'

const Policy = () => {
  return (
<div className='md:flex w-full grid grid-cols-2  py-6 mt-[80px] bg-[#ccc] md:items-center justify-between md:px-[160px]  px-[20px]'>

{/* TEXT 1 */}
        
                <div className='flex md:flex-col md:flex md:items-center md:justify-center '>
                    <LocalShippingOutlined style={{ fontSize: "50px" }}/>
                        <div className='md:mt-2 md:text-center md:pl-0 pl-1'>
                            <h1 className='md:text-[16px] text-[12px] font-bold'>FREE SHIPPING & RETURNS</h1>
                            <p className='md:text-[14px] text-[12px]'>Free shipping</p>
                        </div>
                </div>
           
{/* END TEXT 1 */}

{/* TEXT 2 */}
            <div className='flex md:flex-col md:flex md:items-center md:justify-center '>
                <LocalAtmOutlined style={{ fontSize: "50px" }}/>
                    <div className='md:mt-2 md:text-center md:pl-0 pl-1'>
                        <h1 className='md:text-[16px] text-[12px] font-bold'>MONEY BACK GUARANTEE</h1>
                        <p className='md:text-[14px] text-[12px]'>30-day money-back guarantee</p>
                    </div>
            </div>
{/* END TEXT 2 */}

{/* TEXT 3 */}
            <div className='flex md:flex-col md:flex md:items-center md:justify-center md:mt-0 mt-2'>
                <HttpsOutlined style={{ fontSize: "50px" }}/>
                    <div className='md:mt-2 md:text-center md:pl-0 pl-1'>
                        <h1 className='md:text-[16px] text-[12px] font-bold'>SAFE PAYMENT</h1>
                        <p className='md:text-[14px] text-[12px]'>All payments are guaranteed</p>
                    </div>
            </div>
{/* END TEXT 3 */}

{/* TEXT 4 */}
            <div className='flex md:flex-col md:flex md:items-center  md:justify-center md:mt-0 mt-2'>
                <HeadsetMicOutlined style={{ fontSize: "50px" }}/>
                    <div className='md:mt-2 md:text-center md:pl-0 pl-1'>
                        <h1 className='md:text-[16px] text-[12px] font-bold'>1-000-000-44-33</h1>
                        <p className='md:text-[14px] text-[12px]'>Hourly time for delivery.</p>
                    </div>
            </div>
{/* END TEXT 4 */}

    </div>
  )
}
export default Policy;
