import { HeadsetMicOutlined, HttpsOutlined, LocalAtmOutlined, LocalShippingOutlined } from '@material-ui/icons'
import React from 'react'

export default function Policy  ()  {
  return (
    <div className='  bg-[#ccc] px-2 md:px-0'>

        <div className='md:flex w-full grid grid-cols-2 container mx-auto  py-6  md:mt-10 mt-14   md:items-center justify-between '>
    
    {/* TEXT 1 */}
            
                    <div className='flex md:flex-col md:flex md:items-center md:justify-center '>
                        <LocalShippingOutlined style={{ fontSize: "50px" }}/>
                            <div className='md:mt-2 md:text-center md:pl-0 pl-1'>
                                <h1 className='text-sm font-bold'>FREE SHIPPING & RETURNS</h1>
                                <p className='text-xs font-medium'>Free shipping</p>
                            </div>
                    </div>
               
    {/* END TEXT 1 */}
    
    {/* TEXT 2 */}
                <div className='flex md:flex-col md:flex md:items-center md:justify-center '>
                    <LocalAtmOutlined style={{ fontSize: "50px" }}/>
                        <div className='md:mt-2 md:text-center md:pl-0 pl-1'>
                            <h1 className='text-sm font-bold'>MONEY BACK GUARANTEE</h1>
                            <p className='text-xs font-medium'>30-day money-back guarantee</p>
                        </div>
                </div>
    {/* END TEXT 2 */}
    
    {/* TEXT 3 */}
                <div className='flex md:flex-col md:flex md:items-center md:justify-center md:mt-0 mt-2'>
                    <HttpsOutlined style={{ fontSize: "50px" }}/>
                        <div className='md:mt-2 md:text-center md:pl-0 pl-1'>
                            <h1 className='text-sm font-bold'>SAFE PAYMENT</h1>
                            <p className=' font-medium text-xs'>All payments are guaranteed</p>
                        </div>
                </div>
    {/* END TEXT 3 */}
    
    {/* TEXT 4 */}
                <div className='flex md:flex-col md:flex md:items-center  md:justify-center md:mt-0 mt-2'>
                    <HeadsetMicOutlined style={{ fontSize: "50px" }}/>
                        <div className='md:mt-2 md:text-center md:pl-0 pl-1'>
                            <h1 className='text-sm font-bold'>1-000-000-44-33</h1>
                            <p className='text-xs font-medium'>Hourly time for delivery.</p>
                        </div>
                </div>
    {/* END TEXT 4 */}
    
        </div>
    </div>
  )
}

