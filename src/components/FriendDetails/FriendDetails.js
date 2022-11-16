import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h1>!!Details Page!!</h1>
            <h4>Detail About: {friend.name}</h4>
            <p>Cell-Number: {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;
