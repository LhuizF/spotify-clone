import React from 'react';
import { useHistory } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';

import useApi from '../../hooks/useApi';
import UserTopMusic from '../../components/UserTopMusic';
import { NewUser } from '../../store/User/actions';
import { ResetToken } from '../../store/Auth/actions';
import { HeaderContainer } from './styled';

import ListMusic from '../../components/ListMusic';
import { useState } from 'react';

export default function Playlist({ match }) {
    const [limit, setLimit] = useState(10);
    const history = useHistory();
    const { id } = match.params;
    const { items } = useApi('get', `playlists/${id}/tracks`, `limit=${limit}`);

    return (
        <>
            <HeaderContainer>
                <button
                    className="goBack"
                    type="button"
                    onClick={() => {
                        history.goBack();
                    }}
                >
                    <FaArrowLeft color="#fff" />
                </button>
                <h1>Playlists</h1>
            </HeaderContainer>
            <main>
                <ListMusic items={items} />
                <button
                    onClick={() => {
                        setLimit(limit + 10);
                    }}
                >
                    <RiArrowDownSLine size={26} color="#fff" />
                </button>
            </main>
        </>
    );
}
