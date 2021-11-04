import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import useApi from '../../hooks/useApi';
import { HeaderContainer, BtnContainer } from './styled';

import ListMusic from '../../components/ListMusic';

export default function Playlist({ match }) {
    const limit = 20;
    const [showing, setShowing] = useState(0);
    const history = useHistory();
    const { id } = match.params;
    const data = useApi('get', `playlists/${id}`);
    const { items, total } = useApi(
        'get',
        `playlists/${id}/tracks`,
        `limit=${limit}`,
        `offset=${showing}`
    );

    const { name, description, images } = data;

    if (!name) return <></>;

    console.log(showing);

    return (
        <>
            <HeaderContainer>
                <div className="back-container">
                    <button
                        type="button"
                        onClick={() => {
                            history.goBack();
                        }}
                    >
                        <FaArrowLeft color="#fff" size={26} />
                    </button>
                    <img src={images[0].url} alt="" />
                </div>
                <h1>{name}</h1>
                <p>{description}</p>
            </HeaderContainer>

            <main>
                <ListMusic items={items} open={'all'} />
                <BtnContainer>
                    {showing === 0 ? null : (
                        <button
                            onClick={() => {
                                setShowing(showing - limit);
                            }}
                        >
                            <FaArrowLeft size={30} color="#fff" />
                        </button>
                    )}
                    {showing >= total - limit ? null : (
                        <button
                            onClick={() => {
                                setShowing(showing + limit);
                            }}
                        >
                            <FaArrowRight size={30} color="#fff" />
                        </button>
                    )}
                </BtnContainer>
            </main>
        </>
    );
}
