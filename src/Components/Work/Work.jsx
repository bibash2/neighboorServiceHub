import React, { useState } from "react";

const Work = () => {
    const [clicked, setClicked] = useState(false)
    const showWorkDetail = () => {
        setClicked(!clicked);
    }
    return (
        <>
            <div onClick={showWorkDetail}
                className={clicked ? `hidden ` : ` h-20 bg-slate-300 w-1/2 rounded-md ml-96 hover:border-2 border-blue-800 hover:bg-blue-700 hover:bg-opacity-50 cursor-pointer`} >
                <div className="flex flex-row gap-5 justify-around">
                    <p>posted by:</p>
                    <p>status</p>
                    <time>Posted date</time>
                    <address>location</address>
                    <p>bid amount</p>
                    <p>total bid</p>
                    <p>day left</p>
                    <p>location</p>
                </div>
                <div className="h-12 overflow-hidden ml-5 mr-5">
                    <p>detail of the project</p>
                </div>

            </div>
            {
                clicked &&
                <div onClick={showWorkDetail}
                 className="h-screen w-screen fixed backdrop-blur-2xl bg-slate-800 bg-opacity-15 ">
                    <div className="flex flex-col w-1/2 ml-96 mt-10 bg-slate-500 p-2 rounded-2xl">
                        <div className="flex flex-row gap-5 justify-around ">
                            <p>posted by:</p>
                            <p>status</p>
                            <time>Posted date</time>
                            <address>location</address>
                            <p>bid amount</p>
                            <p>total bid</p>
                            <p>day left</p>
                            <p>location</p>
                        </div>
                        <div className="h-12 overflow-hidden ml-5 mr-5">
                            <p>detail of the project</p>
                        </div>
                        <div className="flex flex-row  gap-10 justify-center">
                            <button className="bg-green-500 text-white p-1 rounded-lg m-1"> Accept</button>
                            <button  className="bg-red-500 text-white p-1 rounded-lg m-1">Reject</button>
                        </div>

                    </div>
                </div>
            }

        </>
    )
}

export default Work;