import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import styles from './Home.module.scss';
import {
  faSquarePlus,
  faUpDown,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);
const genres = [
  'MMO',
  'MMORPG',
  'Shooter',
  'Strategy',
  'Moba',
  'Battle Royale',
  'Card',
  'Racing',
  'Sports',
  'Social',
  'Fighting',
];
const catetory = [
  {
    name: 'Graphics',
    types: ['3D Graphics', '2D Graphics'],
  },
  {
    name: 'Combat',
    types: ['PVE', 'PVP'],
  },
  {
    name: 'Gameplay',
    types: ['Turn-Based', 'Real-Time'],
  },
  {
    name: 'Setting',
    types: ['Anime', 'Fantasy', 'Sci-Fi', 'Military', 'Horror'],
  },
];
const tags = [
  'MMOFPS',
  'Sandbox',
  'Open World',
  'Survival',
  'Action RPG',
  'MMORTS',
  'Pixel',
  'Voxel',
  'MMOTPS',
  'Zombie',
  'First-Person',
  'Top-Down',
  'Tank',
  'Space',
  'Sailing',
  'Side Scroller',
  'Superhero',
  'Permadeath',
  'Action',
  'Martial Arts',
  'Flight',
  'Low-Spec',
];

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
//     id: 345,
//     title: 'Forge of Empires',
//     thumbnail: 'https://www.freetogame.com/g/345/thumbnail.jpg',
//     short_description:
//       'A free to play 2D browser-based online strategy game, become the leader and raise your city.',
//     game_url: 'https://www.freetogame.com/open/forge-of-empires',
//     genre: 'Strategy',
//     platform: 'Web Browser',
//     publisher: 'InnoGames',
//     developer: 'InnoGames',
//     release_date: '2012-04-17',
//     freetogame_profile_url: 'https://www.freetogame.com/forge-of-empires',
//   },
//   {
//     id: 427,
//     title: 'Drakensang Online',
//     thumbnail: 'https://www.freetogame.com/g/427/thumbnail.jpg',
//     short_description:
//       'A free to play browser-based top-down hack-and-slash 3D MMORPG similar to games in the Diablo series.',
//     game_url: 'https://www.freetogame.com/open/drakensang-online',
//     genre: 'MMORPG',
//     platform: 'Web Browser',
//     publisher: 'Bigpoint',
//     developer: 'Bigpoint',
//     release_date: '2011-08-08',
//     freetogame_profile_url: 'https://www.freetogame.com/drakensang-online',
//   },
//   {
//     id: 525,
//     title: 'MultiVersus',
//     thumbnail: 'https://www.freetogame.com/g/525/thumbnail.jpg',
//     short_description:
//       'The Warner Bros lineup meets Smash in Player First Games’ MultiVersus.',
//     game_url: 'https://www.freetogame.com/open/multiversus',
//     genre: 'Fighting',
//     platform: 'PC (Windows)',
//     publisher: 'Warner Bros. Games',
//     developer: 'Player First Games',
//     release_date: '2022-07-19',
//     freetogame_profile_url: 'https://www.freetogame.com/multiversus',
//   },
//   {
//     id: 475,
//     title: 'Genshin Impact',
//     thumbnail: 'https://www.freetogame.com/g/475/thumbnail.jpg',
//     short_description:
//       'If you’ve been looking for a game to scratch that open-world action RPG itch, one with perhaps a bit of Asian flair, then you’re going to want to check out miHoYo’s Genshin Impact.',
//     game_url: 'https://www.freetogame.com/open/genshin-impact',
//     genre: 'Action RPG',
//     platform: 'PC (Windows)',
//     publisher: 'miHoYo',
//     developer: 'miHoYo',
//     release_date: '2020-09-28',
//     freetogame_profile_url: 'https://www.freetogame.com/genshin-impact',
//   },
//   {
//     id: 523,
//     title: 'Fall Guys',
//     thumbnail: 'https://www.freetogame.com/g/523/thumbnail.jpg',
//     short_description:
//       'Play the most competitive massively multiplayer party royale game featuring beans ever for free on a variety of platforms. ',
//     game_url: 'https://www.freetogame.com/open/fall-guys',
//     genre: 'Battle Royale',
//     platform: 'PC (Windows)',
//     publisher: 'Mediatonic',
//     developer: 'Mediatonic',
//     release_date: '2020-08-04',
//     freetogame_profile_url: 'https://www.freetogame.com/fall-guys',
//   },
//   {
//     id: 340,
//     title: 'Game Of Thrones Winter Is Coming',
//     thumbnail: 'https://www.freetogame.com/g/340/thumbnail.jpg',
//     short_description:
//       'A free-to-play browser-based RTS based on the George R.R. Martin novels and popular HBO series.',
//     game_url:
//       'https://www.freetogame.com/open/game-of-thrones-winter-is-coming',
//     genre: 'Strategy',
//     platform: 'Web Browser',
//     publisher: 'GTArcade',
//     developer: 'YOOZOO Games ',
//     release_date: '2019-11-14',
//     freetogame_profile_url:
//       'https://www.freetogame.com/game-of-thrones-winter-is-coming',
//   },
//   {
//     id: 445,
//     title: 'Dark Knight',
//     thumbnail: 'https://www.freetogame.com/g/445/thumbnail.jpg',
//     short_description:
//       'A browser-based fantasy MMOARPG wherein players take on the role of a devil hunter descended from the gods.',
//     game_url: 'https://www.freetogame.com/open/dark-knight',
//     genre: 'MMORPG',
//     platform: 'Web Browser',
//     publisher: 'Opogame',
//     developer: 'Opogame',
//     release_date: '2019-08-06',
//     freetogame_profile_url: 'https://www.freetogame.com/dark-knight',
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

function HomePage() {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch('https://www.freetogame.com/api/games')
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid')}>
        <div className={cx('search')}>
          <div className={cx('search--title')}>
            <h1>Advanced Game Search</h1>
            <p>Find and filter free-to-play games your way!</p>
          </div>
          <div className={cx('search--content')}>
            <FontAwesomeIcon icon={faCircleXmark} />
            <span>Clear Filters</span>
          </div>
        </div>
        <div className={cx('sidebar')}>
          <div className={cx('sidebar--group')}>
            <div className={cx('sidebar--group--title')}>
              <button>Sort By:</button>
              <FontAwesomeIcon icon={faUpDown} />
            </div>
            <div className={cx('sidebar--group--select')}>
              <div className={cx('sidebar--group--select--title')}>
                Platform
              </div>
              <ul>
                <li>
                  <input type="checkbox" />
                  <span>PC</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Browser</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx('sidebar--group')}>
            <div className={cx('sidebar--group--title')}>
              <button>Filter Type:</button>
              <FontAwesomeIcon icon={faUpDown} />
            </div>
            <div
              className={cx(
                'sidebar--group--select',
                'sidebar--group--select__scroll'
              )}
            >
              <div className={cx('sidebar--group--select--title')}>Genre</div>
              <ul>
                {genres.map((genre, index) => {
                  return (
                    <li key={index}>
                      <input type="checkbox" />
                      <span>{genre}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={cx('sidebar--group')}>
            {catetory.map((item, index) => {
              return (
                <div key={index} className={cx('sidebar--group--select')}>
                  <div className={cx('sidebar--group--select--title')}>
                    {item.name}
                  </div>
                  <ul>
                    {item.types.map((type, index) => {
                      return (
                        <li key={index}>
                          <input type="checkbox" />
                          <span>{type}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className={cx('sidebar--group')}>
            <div
              className={cx(
                'sidebar--group--select',
                'sidebar--group--select__scroll'
              )}
            >
              <div className={cx('sidebar--group--select--title')}>Tags</div>
              <ul>
                {tags.map((tag, index) => {
                  return (
                    <li key={index}>
                      <input type="checkbox" />
                      <span>{tag}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className={cx('main')}>
          {games.slice(0, 99).map(game => {
            return (
              <div key={game.id} className={cx('main--game')}>
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
