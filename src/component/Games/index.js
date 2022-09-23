import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquarePlus,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Games.module.scss';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

// const games = [
//   {
//     id: 521,
//     title: 'Diablo Immortal',
//     thumbnail: 'https://www.freetogame.com/g/521/thumbnail.jpg',
//     short_description:
//       'Built for mobile and also released on PC, Diablo Immortal fills in the gaps between Diablo II and III in an MMOARPG environment.',
//     game_url: 'https://www.freetogame.com/open/diablo-immortal',
//     genre: 'MMOARPG',
//     platform: 'PC (Windows)',
//     publisher: 'Blizzard Entertainment',
//     developer: 'Blizzard Entertainment',
//     release_date: '2022-06-02',
//     freetogame_profile_url: 'https://www.freetogame.com/diablo-immortal',
//   },
//   {
//     id: 517,
//     title: 'Lost Ark',
//     thumbnail: 'https://www.freetogame.com/g/517/thumbnail.jpg',
//     short_description:
//       'Smilegate’s free-to-play multiplayer ARPG is a massive adventure filled with lands waiting to be explored, people waiting to be met, and an ancient evil waiting to be destroyed.',
//     game_url: 'https://www.freetogame.com/open/lost-ark',
//     genre: 'ARPG',
//     platform: 'PC (Windows)',
//     publisher: 'Amazon Games',
//     developer: 'Smilegate RPG',
//     release_date: '2022-02-11',
//     freetogame_profile_url: 'https://www.freetogame.com/lost-ark',
//   },
//   {
//     id: 516,
//     title: 'PUBG: BATTLEGROUNDS',
//     thumbnail: 'https://www.freetogame.com/g/516/thumbnail.jpg',
//     short_description:
//       'Get into the action in one of the longest running battle royale games PUBG Battlegrounds.',
//     game_url: 'https://www.freetogame.com/open/pubg',
//     genre: 'Shooter',
//     platform: 'PC (Windows)',
//     publisher: 'KRAFTON, Inc.',
//     developer: 'KRAFTON, Inc.',
//     release_date: '2022-01-12',
//     freetogame_profile_url: 'https://www.freetogame.com/pubg',
//   },
//   {
//     id: 508,
//     title: 'Enlisted',
//     thumbnail: 'https://www.freetogame.com/g/508/thumbnail.jpg',
//     short_description:
//       'Get ready to command your own World War II military squad in Gaijin and Darkflow Software’s MMO squad-based shooter Enlisted. ',
//     game_url: 'https://www.freetogame.com/open/enlisted',
//     genre: 'Shooter',
//     platform: 'PC (Windows)',
//     publisher: 'Gaijin Entertainment',
//     developer: 'Darkflow Software',
//     release_date: '2021-04-08',
//     freetogame_profile_url: 'https://www.freetogame.com/enlisted',
//   },
//   {
//     id: 347,
//     title: 'Elvenar',
//     thumbnail: 'https://www.freetogame.com/g/347/thumbnail.jpg',
//     short_description:
//       'A browser based city-building strategy MMO set in the fantasy world of Elvenar.',
//     game_url: 'https://www.freetogame.com/open/elvenar',
//     genre: 'Strategy',
//     platform: 'Web Browser',
//     publisher: 'InnoGames',
//     developer: 'InnoGames',
//     release_date: '2015-04-08',
//     freetogame_profile_url: 'https://www.freetogame.com/elvenar',
//   },
//   {
//     id: 11,
//     title: 'Neverwinter',
//     thumbnail: 'https://www.freetogame.com/g/11/thumbnail.jpg',
//     short_description:
//       'A free-to-play 3D action MMORPG based on the acclaimed Dungeons & Dragons fantasy roleplaying game. ',
//     game_url: 'https://www.freetogame.com/open/neverwinter',
//     genre: 'MMORPG',
//     platform: 'PC (Windows)',
//     publisher: 'Perfect World Entertainment',
//     developer: 'Cryptic Studios',
//     release_date: '2013-12-06',
//     freetogame_profile_url: 'https://www.freetogame.com/neverwinter',
//   },
//   {
//     id: 380,
//     title: 'Dark Orbit Reloaded',
//     thumbnail: 'https://www.freetogame.com/g/380/thumbnail.jpg',
//     short_description:
//       'A browser-based 3D space-combat MMO with a massive playerbase!',
//     game_url: 'https://www.freetogame.com/open/darkorbit',
//     genre: 'Shooter',
//     platform: 'Web Browser',
//     publisher: 'Bigpoint',
//     developer: 'Bigpoint',
//     release_date: '2006-12-11',
//     freetogame_profile_url: 'https://www.freetogame.com/darkorbit',
//   },
// ];

function Games() {
  const [games, setGames] = useState([]);
  const game_url = 'https://www.freetogame.com/api/games';
  useEffect(() => {
    fetch(game_url)
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <Fragment>
      {games.slice(0, 99).map(game => {
        return (
          <a
            href={game.freetogame_profile_url}
            key={game.id}
            className={cx('main--game')}
          >
            <div className={cx('main--game--img')}>
              <img src={game.thumbnail} alt="game" />
            </div>
            <div className={cx('main--game--info')}>
              <h3
                className={cx(
                  'main--game--info--item',
                  'main--game--info--item__title'
                )}
              >
                {game.title}
              </h3>
              <p
                className={cx(
                  'main--game--info--item',
                  'main--game--info--item__desc'
                )}
              >
                {game.short_description}
              </p>
              <div
                className={cx(
                  'main--game--info--item',
                  'main--game--info--item__foot'
                )}
              >
                <div className={cx('main--game--info--item__foot--item')}>
                  <FontAwesomeIcon icon={faSquarePlus} />
                </div>
                <div
                  className={cx(
                    'main--game--info--item__foot--item',
                    'main--game--info--item__foot--item__right'
                  )}
                >
                  <div
                    className={cx(
                      'main--game--info--item__foot--item__right--genre'
                    )}
                  >
                    {game.genre}
                  </div>
                  <div
                    className={cx(
                      'main--game--info--item__foot--item__right--flatform'
                    )}
                  >
                    {game.platform === 'PC (Windows)' ? (
                      <FontAwesomeIcon icon={faWindows} />
                    ) : (
                      <FontAwesomeIcon icon={faWindowMaximize} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </Fragment>
  );
}

export default Games;
