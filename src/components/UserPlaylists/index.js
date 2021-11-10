import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
    BsFillArrowLeftSquareFill,
    BsFillArrowRightSquareFill
} from 'react-icons/bs';

import useApi from '../../hooks/useApi';
import { PlaylistsContainer } from './styled';

export default function UserPlaylists() {
    const { items } = useApi('get', 'me/playlists', 'limit=50');
    const container = useRef('');

    const handlePrev = () => {
        container.current.scrollLeft -= container.current.offsetWidth - 120;
    };
    const handleNext = () => {
        container.current.scrollLeft += container.current.offsetWidth - 120;
    };

    return (
        <section>
            <h3>Playlists publicas</h3>
            <PlaylistsContainer>
                <div className="btn-container">
                    <button type="button" onClick={handlePrev}>
                        <BsFillArrowLeftSquareFill />
                    </button>
                    <button type="button">
                        <BsFillArrowRightSquareFill onClick={handleNext} />
                    </button>
                </div>
                <div className="playlists-container" ref={container}>
                    {items
                        ? items.map((playlist, i) => (
                              <Link to={`/playlist/${playlist.id}`} key={i}>
                                  <div className="playlist">
                                      <img
                                          src={
                                              playlist.images.length > 0
                                                  ? playlist.images[0].url
                                                  : 'https://i.pinimg.com/originals/de/80/f3/de80f396e8d27c19468e2f0bb2411787.png'
                                          }
                                      />

                                      <p className="playlist-name">
                                          {playlist.name.length > 14
                                              ? playlist.name.slice(0, 12) +
                                                '...'
                                              : playlist.name}
                                      </p>
                                      <p className="playlist-description">
                                          {playlist.description}
                                      </p>
                                  </div>
                              </Link>
                          ))
                        : null}
                </div>
            </PlaylistsContainer>
        </section>
    );
}
