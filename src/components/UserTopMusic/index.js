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
                <tbody>
                    {items
                        ? items.map((music, i) => (
                              <tr className="music-card" key={i}>
                                  <td className="music-id">{i + 1}</td>

                                  <td>
                                      <div className="music-image-name-artist-container">
                                          <img
                                              src={music.album.images[2].url}
                                              alt=""
                                          />
                                          <div>
                                              <p>{music.name}</p>
                                              <p>
                                                  {music.artists.map(
                                                      (artist) =>
                                                          artist.name + ' '
                                                  )}
                                              </p>
                                          </div>
                                      </div>
                                  </td>

                                  <td>{music.album.name}</td>
                                  <td className="music-timer">
                                      {getMin(music.duration_ms)}
                                  </td>
                              </tr>
                          ))
                        : null}
                </tbody>
            </TopMusic>
        </div>
    );
}
