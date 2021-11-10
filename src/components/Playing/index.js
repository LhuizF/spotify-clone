import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { MdSkipNext, MdPlayArrow, MdSkipPrevious } from 'react-icons/md';

import axios from '../../service/axios';
import { PlayingContainer, TextContainer } from './styled';

export default function Playing() {
    const [music, setMusic] = useState(false);
    //const [duration, setDuration] = useState(0);
    const { access_token } = useSelector((state) => state.auth);

    useEffect(() => {
        async function getMusic() {
            const { data } = await axios.get('/me/player/currently-playing', {
                headers: { Authorization: `Bearer ${access_token}` }
            });

            setMusic(data.item);
            //setDuration(data.item.duration_ms);
        }
        getMusic();
    }, [access_token]);

    if (!music) return <></>;

    const artists = music.artists.map((artist) => artist.name + ' ').toString();
    console.log(artists);
    return (
        <PlayingContainer>
            <img
                src={
                    music.album.images.length > 0
                        ? music.album.images[2].url
                        : 'https://cdn-icons-png.flaticon.com/512/727/727218.png'
                }
                alt="image album"
            />
            <div className="name-player-container">
                <TextContainer length={music.name.length}>
                    <p>{music.name}</p>
                </TextContainer>
                <TextContainer length={artists.length}>
                    <p>{artists}</p>
                </TextContainer>
                <div className="player-controls">
                    <MdSkipPrevious />
                    <MdPlayArrow />
                    <MdSkipNext />
                </div>
            </div>
        </PlayingContainer>
    );
}
