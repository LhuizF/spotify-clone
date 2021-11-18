/* eslint-disable */
import React from 'react';
import usePlay from '../../hooks/usePlay'

import { TableContainer } from './styled';

export default function ListMusic({ items, open }) {
    const getMin = (time) => new Date(time).toISOString().substr(14, 5);


    const aaa = (track) => {
        usePlay(track)
    }

    return (
        <TableContainer open={open}>
            <table>
                <tbody>
                    {items? items.map((music, i) => {

                        if (music.track) {
                            music = music.track;
                        }
                        // console.log(music);
                        return (
                            <tr className="music-card" key={music.id + i} onClick={() =>{
                                aaa(music.uri)
                            }}>

                                <td className="music-id">{i + 1}</td>
                                <td>
                                    <div className="music-image-name-artist-container">
                                        <img
                                            src={music.album.images.length > 0
                                                    ? music.album.images[2].url
                                                    : 'https://cdn-icons-png.flaticon.com/512/727/727218.png'
                                            }
                                            alt=""
                                        />
                                        <div>
                                            <p>{music.name}</p>
                                            <p>
                                                {music.artists.map((artist) => artist.name + ' ')}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                <td>{music.album.name}</td>
                                <td className="music-timer">
                                    {getMin(music.duration_ms)}
                                </td>
                            </tr>
                        );
                    })
                    : null}
                </tbody>
            </table>
        </TableContainer>
    );
}
