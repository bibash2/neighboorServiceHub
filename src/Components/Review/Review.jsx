import React from 'react'

function Review() {
    return (
        <div>
            <div className='flex flex-row gap-2'>
                <img className='w-10 h-10 object-cover rounded-full' src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3oo0tHTZ0hgXIfdUjC7TIeTOCXhUpvRBd3g&s'} alt="" />
                <p>somebody</p>
                <p className='text-slate-400 text-sm'>5 days ago</p>
            </div>
            <p className='ml-11 -mt-5'>This is the description section</p>
        </div>

    )
}

export default Review