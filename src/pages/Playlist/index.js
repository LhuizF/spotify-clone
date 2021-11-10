import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import useApi from '../../hooks/useApi';
import { HeaderContainer, MusicsPlaylist } from './styled';

import ListMusic from '../../components/ListMusic';

export default function Playlist({ match }) {
    const history = useHistory();
    const [offset, setOffset] = useState(0);
    const limit = 20;

    const { id } = match.params;
    const data = useApi('get', `playlists/${id}`);
    const { items, total } = useApi(
        'get',
        `playlists/${id}/tracks`,
        `limit=${limit}`,
        `offset=${offset}`
    );

    const { name, description, images } = data;

    if (!name) return <></>;

    return (
        <>
            <HeaderContainer>
                <img src={images[0].url} alt="" />
                <button
                    type="button"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    <FaArrowLeft color="#fff" size={26} />
                </button>

                <h1>{name}</h1>
                <p>{description}</p>
            </HeaderContainer>

            <MusicsPlaylist>
                <ListMusic items={items} open={'all'} />
                <div className="btn-container">
                    {offset === 0 ? null : (
                        <button
                            onClick={() => {
                                setOffset(offset - limit);
                            }}
                        >
                            <FaArrowLeft size={30} color="#fff" />
                        </button>
                    )}
                    {offset >= total - limit ? null : (
                        <button
                            onClick={() => {
                                setOffset(offset + limit);
                            }}
                        >
                            <FaArrowRight size={30} color="#fff" />
                        </button>
                    )}
                </div>
            </MusicsPlaylist>
        </>
    );
}
