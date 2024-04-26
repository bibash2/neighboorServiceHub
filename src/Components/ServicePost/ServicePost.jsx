import React, { useId, useState } from 'react'
import { Form } from 'react-router-dom'
import Review from '../Review/Review';
import Bid from '../Bid/Bid';


function ServicePost() {
    const bidAmountId = useId();
    const descriptionId = useId();
    const [bidAmount, setBidAmount] = useState('');
    const [bidDescription, setBidDescription] = useState('');
    return (
        <div className=' w-1/2 ml-96 mt-3'>
            <div
                className="flex flex-col bg-slate-300  rounded-md p-3 mb-5">
                <b className="text-black">This is the summary or the header of the post</b>
                <i className="">All the detail about the post goes here Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate porro voluptas ab eaque non omnis fugit quia voluptate nemo, doloremque illo, vero enim blanditiis ad commodi obcaecati provident ipsam sapiente.</i>
                <div className="flex flex-row justify-around text-wrap mt-3 mb-3">
                    <time>Posted date</time>
                    <address>location</address>
                    <p>bid amount</p>
                    <p>total bid</p>
                    <p>day left</p>
                    <p>location</p>
                </div>

                <Form>
                    <label htmlFor={bidAmountId}> Bid Amount</label><br />
                    <input type="number" onClick={e=> setBidAmount(e.currentTarget)} required /><br />

                    <label htmlFor={descriptionId}>Description</label><br />
                    <input type="text" onClick={e=>setBidDescription(e.currentTarget)} required /><br />

                    <button type='submit'>Done</button>
                </Form>

            </div>
            <div>
                <Bid/>
            </div>
        </div>

    )
}

export default ServicePost