import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { NewToken } from '../../store/Auth/actions';

export default function Token(match) {
    const dispatch = useDispatch();
    const aa = match.location.hash;
    const bb = aa.split('&');

    const tokens = {
        access_token: bb[0].slice(14),
        refresh_token: bb[1].slice(14)
    };

    dispatch(NewToken(tokens));
    useHistory().push('/home');

    return <></>;
}
