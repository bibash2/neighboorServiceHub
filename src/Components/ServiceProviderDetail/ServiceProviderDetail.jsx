import React, { useCallback, useState } from 'react'
import { useParams } from 'react-router-dom'
import Review from '../Review/Review';

import ReviewForm from '../ReviewForm/ReviewForm';
import WorkForm from '../WorkForm/WorkForm';




function ServiceProviderDetail() {
    const { serviceProviderId } = useParams();
    const [workFormToggle, setWorkFormToggle] = useState(false);
    const [reviewFormToggle, setReviewFormToggle] = useState(false);

    const showReviewFrom = () => {
        setReviewFormToggle(!reviewFormToggle)
        setWorkFormToggle(false)
     
    }

    const showWorkForm = () => {

        setWorkFormToggle(!workFormToggle)
        setReviewFormToggle(false)
    }
    return (
        <div className='w-1/2 ml-96'>
            <div className='flex flex-col justify-center  bg-red-700 p-2 rounded-lg mb-3'>
                <div
                    className="flex flex-row justify-between rounded-xl">
                    <b>name</b>
                    <p>location</p>
                    <p>contact</p>
                    <p>rating</p>
                </div>
                <div className='flex flex-row justify-between ml-32 mr-32'>
                    <button className='text-white border-1 bg-blue-500 rounded-lg p-1 hover:border-2 hover:border-t-white' onClick={showWorkForm}>Add Work</button>
                    <button className='text-white border-1 bg-blue-500 rounded-lg p-1 hover:border-2 hover:border-t-white' onClick={showReviewFrom}>Add Review</button>
                </div>

            </div>
            <div className='bg-slate-600'>
                {workFormToggle && <WorkForm />}
                {reviewFormToggle && <ReviewForm />}
            </div>
            <Review />
        </div>

    )
}

export default ServiceProviderDetail