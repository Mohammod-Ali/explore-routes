import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData()
    return (
        <div>
            <h1>Details About: {friend.name}</h1>
            <p>Call Him/Her: {friend.phone}</p>
            <h3>Everything you need to know about this person</h3>
        </div>
    );
};

export default FriendDetails;