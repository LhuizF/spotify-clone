import React from 'react';
import { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

import useApi from '../../hooks/useApi';
import ListMusic from '../ListMusic';
import { TitleContainer, Button } from './styled';

export default function UserTopMusic() {
    const [open, setOpen] = useState(false);
    const { items } = useApi('get', 'me/top/tracks', `limit=5`);

    return (
        <section>
            <TitleContainer>
                <h3>Músicas mais tocadas este mês</h3>
                <Button
                    open={open}
                    className="btn-arrow"
                    onClick={() => {
                        setOpen(!open);
                    }}
                >
                    <RiArrowDownSLine color="#fff" />
                </Button>
            </TitleContainer>

            <ListMusic items={items} open={open} />
        </section>
    );
}
