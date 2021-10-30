import React from 'react';
import { useSelector } from 'react-redux';

import { HomeContainer } from './styled';

export default function Home() {
    return (
        <HomeContainer>
            <h1>My login Page</h1>
            <button>
                <a href="http://localhost:8888"> Logar com spotify</a>
            </button>
        </HomeContainer>
    );
}
