import React, { useState } from 'react'

function WorkDetail() {
    const [clicked, setClicked] = useState(false);
    const showWorkDetail = () => {
        setClicked(!clicked);
    }

    return (
        <div >
            <div onClick={showWorkDetail} 
            className=" bg-slate-300 w-1/2 rounded-md ml-96 hover:border-2 border-blue-800 hover:bg-blue-700 hover:bg-opacity-50 cursor-pointer">
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
           
        </div>

    )
}

export default WorkDetail