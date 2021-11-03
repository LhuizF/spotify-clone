import React from 'react';
import { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

import useApi from '../../hooks/useApi';
import ListMusic from '../ListMusic';
import { TitleContainer } from './styled';

export default function UserTopMusic() {
    const [limit, setLimit] = useState(1);
    const { items } = useApi('get', 'me/top/tracks', `limit=${limit}`);

    const handleLimit = () => {
        if (limit == 1) {
            setLimit(5);
            return;
        }
        setLimit(1);
    };

    return (
        <section>
            <TitleContainer limit={limit}>
                <h3>Músicas mais tocadas este mês</h3>
                <button
                    onClick={() => {
                        handleLimit();
                    }}
                >
                    <RiArrowUpSLine color="#fff" />
                </button>
            </TitleContainer>
            <ListMusic items={items} />
        </section>
    );
}
