import React from 'react'

function Bid() {
    return (
        <>
            <div className=' bg-slate-500 rounded-md p-2'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44Osut7lvh-JcO3267T48aPfYQ2MMJWBMCQ&s" alt="" className='h-10 w-10 object-cover rounded-full' />
                        <p className='text-base ml-2'>name</p>
                        <p className='ml-1 text-xs text-gray-300'>days ago</p>

                    </div>
                    <p>Bid: <span className='font-bold mr-3'> Rs. 50</span></p>

                </div>
                <p className='ml-12'>this is the description section</p>
            </div>
        </>
    )
}

export default Bid;