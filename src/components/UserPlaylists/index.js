import React from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import { PlaylistsContainer } from './styled';

export default function UserPlaylists() {
    const { items } = useApi('get', 'me/playlists', 'limit=6');
    return (
        <section>
            <h3>Playlists publicas</h3>
            <PlaylistsContainer>
                <div className="playlist-container">
                    {items
                        ? items.map((playlist, i) => (
                              <div key={i}>
                                  <Link to={`/playlist/${playlist.id}`}>
                                      <img src={playlist.images[0].url} />
                                      <p className="playlist-name">
                                          {playlist.name.length > 14
                                              ? playlist.name.slice(0, 12) +
                                                '...'
                                              : playlist.name}
                                      </p>
                                      <p className="playlist-description">
                                          {playlist.description}
                                      </p>
                                  </Link>
                              </div>
                          ))
                        : null}
                </div>
            </PlaylistsContainer>
        </section>
    );
}
