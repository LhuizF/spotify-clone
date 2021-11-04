import React, { useRef } from 'react';
import { useState } from 'react';
import { RiArrowUpSLine } from 'react-icons/ri';

import useApi from '../../hooks/useApi';
import ListMusic from '../ListMusic';
import { TitleContainer, TableContainer } from './styled';

export default function UserTopMusic() {
    const [open, setOpen] = useState(false);
    const { items } = useApi('get', 'me/top/tracks', `limit=5`);

    return (
        <section>
            <TitleContainer>
                <h3>Músicas mais tocadas este mês</h3>
                <button
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <RiArrowUpSLine color="#fff" />
                </button>
            </TitleContainer>

            <ListMusic items={items} open={open} />
        </section>
    );
}
