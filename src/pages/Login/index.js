import React from 'react';

import { LoginContainer } from './styled';

export default function Login() {
    return (
        <LoginContainer>
            <div className="login">
                <p>FAKE</p>
                <img src="https://download.logo.wine/logo/Spotify/Spotify-Logo.wine.png" />
                <button>
                    <a href="http://localhost:8888/login">
                        Fazer login com Spotify
                    </a>
                </button>
            </div>
        </LoginContainer>
    );
}
