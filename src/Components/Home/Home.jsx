import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { allPost } from "../../Store/allPostSlice";


const Home = () => {
    // const [posts, setPosts] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        // Dispatch the allPost async thunk when the component mounts
        dispatch(allPost());
    }, [dispatch]);
    const posts = useSelector(state => state.data);

    return (
        <>
            <ul>
                {posts.map((post) => (
                    <li className="mb-2" key={post.project_id}>
                        {console.log(post)}
                        <Link
                            to="./servicePost"
                            className="flex flex-col bg-slate-300 w-7/12 ml-96 rounded-md p-3 hover:border-2 border-blue-600 hover:bg-blue-400 hover:bg-opacity-35">
                            <b className="text-black">{post.title}</b>
                            <p className="h-12 overflow-hidden text-ellipsis">{post.project_desc}</p>
                            <div className="flex flex-row justify-around text-wrap">
                                <address>{post.address}</address>
                                <p>{post.fullname}</p>
                                <p>{post.category_name}</p>
                                <p>{post.contact}</p>
                                <p>{} bid</p>
                            </div>
                        </Link>
                    </li>
                ))}



            </ul>
        </>

    )
}

export default Home;