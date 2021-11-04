import React from 'react';
import useApi from '../../hooks/useApi';

export default function NavBar() {
    const { data } = useApi('get', '/me/following', 'type=artist');
    //console.log(data);

    return <nav></nav>;
}

////https://api.spotify.com/v1/me/following?type=artis
