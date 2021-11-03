import React from 'react';

import { TableMusic } from './styled';

export default function ListMusic({ items }) {
    const getMin = (time) => new Date(time).toISOString().substr(14, 5);

    return (
        <TableMusic>
            <tbody>
                {items
                    ? items.map((music, i) => {
                          if (music.track) {
                              music = music.track;
                          }
                          return (
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
                          );
                      })
                    : null}
            </tbody>
        </TableMusic>
    );
}
