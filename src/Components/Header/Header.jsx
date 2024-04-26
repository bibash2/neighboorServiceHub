import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const [toggleActivity, setToggleActivity] = useState(false);

    const showActivity = () => {
        setToggleActivity(!toggleActivity);
    }


    return (
        <>
        <header className='flex flex-row justify-between m-1 bg-slate-500 px-4 p-2 mb-4'>
            <ul className='flex flex-row gap-8'>
                <li className='' >
                    <NavLink
                        className={({ isActive }) => `${isActive ? "text-red-700" : "text-black"}`}
                        to=''>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => `${isActive ? "text-red-700" : "text-black"}`}
                        to="serviceProviders">
                        Service Provider
                    </NavLink>
                </li>
            </ul>
            <ul className='flex flex-row gap-8'>
                <li>
                    <NavLink
                        className={({ isActive }) => `${isActive ? "text-red-700" : "text-black"}`}
                        to="work">
                        Work
                    </NavLink>
                </li>
                <li 
                    onClick={showActivity}
                    className='hover:text-red-700'>
                    Your Activity
                </li>
                {
            toggleActivity &&
            <li className='flex flex-col absolute  bg-slate-400 justify-center ml-20 mt-8'>
                <NavLink
                className={({isActive})=> `${isActive? "text-red-700":"text-black"}`}
                    to="yourWork"
                    >
                    Your Work
                </NavLink>
                <NavLink
                 className={({isActive})=> `${isActive? "text-red-700":"text-black"}`}
                    to="yourPost"
                >
                    Your Post
                </NavLink>
            </li>


        }
               
                <li>
                    <Link to="login">Login</Link>
                </li>
                <li >
                    <Link to="register">Register</Link>
                </li>
            </ul>
            
        </header>
    
        </>
    );
}

export default Header;