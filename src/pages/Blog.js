import React, { useEffect } from 'react';

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getBlogs } from "../store/action/Blog";

const Blog = () => {
    const dispatch = useDispatch();
    // const showMore = () => {
    //     dispatch(addCounter());
    // };
    useEffect(() => {
        dispatch(getBlogs());
    }, []);

    const { posts } = useSelector((state) => state.post);

    return (
        <div className="blog-post-wrapper">
            {
                posts
                .filter((item) => {
                    return item.id <= 15;
                })
                .map((item,idx) => {
                    return(
                        <div className="blog_item" key={idx}>
                            <Link to={`/post/${item.id}`}>{item.title}</Link>
                            <p>{item.body}</p>
                        </div>
                    );
                })};
            {/* <button onClick={showMore}>More</button> */}
        </div>
    )
}

export default Blog
