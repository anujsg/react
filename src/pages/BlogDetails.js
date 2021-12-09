import React, { useEffect } from 'react';

// import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useParams } from 'react-router';

import { getBlog } from "../store/action/Blog";

const BlogDetails = () => {
    
    const { id } = useParams();

    const { single } = useSelector((state) => state.post);

    const { title , body } = single;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlog(id));
    }, [id]);

    return (
        <div>
            <div>{title}</div>
            <p>{body}</p>
        </div>
    )
}

export default BlogDetails
