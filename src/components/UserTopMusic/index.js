import React from 'react';
import useApi from '../../hooks/useApi';
import { TopMusic } from './styled';

export default function UserTopMusic() {
    const { items } = useApi('get', 'me/top/tracks', 'limit=5');

    const getMin = (time) => new Date(time).toISOString().substr(14, 5);

    console.log(items);
    return (
        <div className="top-music-container">
            <h3>Músicas mais tocadas este mês</h3>
            <TopMusic>
                {items
                    ? items.map((music, i) => (
                          <div className="music-card" key={i}>
                              <p className="music-id">{i + 1}</p>
                              <div className="music-image-name-artist-container">
                                  <img src={music.album.images[2].url} alt="" />
                                  <div>
                                      <p>{music.name}</p>
                                      <p>
                                          {music.artists.map(
                                              (artist) => artist.name + ' '
                                          )}
                                      </p>
                                  </div>
                              </div>
                              <div className="music-album-time-container">
                                  <p className="music-album-name">
                                      {music.album.name}
                                  </p>
                                  <p className="music-timer">
                                      {getMin(music.duration_ms)}
                                  </p>
                              </div>
                          </div>
                      ))
                    : null}
            </TopMusic>
        </div>
    );
}
