import React from "react";
import { Link } from "react-router-dom";

const ServiceProvider = ({
    serviceProviderId=1
}
    // {
    //     name,
    //     rating,
    //     location,
    //     contact

    // }
) => {
    return (
        <Link 
        to={`${serviceProviderId}`}
        className="flex flex-row justify-between w-1/2 bg-slate-200 ml-96 rounded-xl hover:bg-blue-400 hover:border-2 border-black p-5">
            <b>name</b>
            <p>location</p>
            <p>contact</p>
            <p>rating</p>
        </Link>
    )
}

export default ServiceProvider;