import React from 'react';

import { TableContainer } from './styled';

export default function ListMusic({ items, open }) {
    const getMin = (time) => new Date(time).toISOString().substr(14, 5);

    return (
        <TableContainer open={open}>
            <table>
                <tbody>
                    {items
                        ? items.map((music, i) => {
                              if (music.track) {
                                  music = music.track;
                              }

                              return (
                                  <tr className="music-card" key={music.id}>
                                      <td className="music-id">{i + 1}</td>
                                      <td>
                                          <div className="music-image-name-artist-container">
                                              <img
                                                  src={
                                                      music.album.images
                                                          .length > 0
                                                          ? music.album
                                                                .images[2].url
                                                          : 'https://cdn-icons-png.flaticon.com/512/727/727218.png'
                                                  }
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
            </table>
        </TableContainer>
    );
}
