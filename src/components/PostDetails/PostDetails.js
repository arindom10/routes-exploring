import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetails.css";

const PostDetails = () => {
    const post = useLoaderData();
    const { userId, id, title, body } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/friend/${userId}`);
    };
    return (
        <div className="postDetails">
            <h3>Post About Details</h3>
            <h4>Post No: {id}</h4>
            <h5>Title: {title}</h5>
            <p>
                <small>Description: {body}</small>
            </p>
            <button onClick={handleNavigate}>Get The Author</button>
        </div>
    );
};

export default PostDetails;
