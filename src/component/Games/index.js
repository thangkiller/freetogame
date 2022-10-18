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

function Games({ filter }) {
  const [games, setGames] = useState([]);
  const hasGame = games.status !== 0;
  const standardContent = contentQuery => {
    return contentQuery
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/-graphics/g, '');
  };
  const setQuery = (isMutipleSelectInTag, contentQuery) => {
    if (isMutipleSelectInTag) {
      return 'filter?' + contentQuery.replace('category', 'tag');
    }
    return 'games?' + contentQuery;
  };
  const handlerQuery = filter => {
    let contentQuery = '';
    let isMutipleSelectInTag = false;
    let isTagOne = true;
    for (const key in filter) {
      if (!isTagOne) {
        contentQuery += '&';
      } else {
        isTagOne = false;
      }
      switch (filter[key].length) {
        case 0:
          break;
        case 1:
          contentQuery += `${key}=${filter[key][0]}`;
          break;
        default:
          isMutipleSelectInTag = true;
          contentQuery += `${key}=${filter[key].join('.')}`;
          break;
      }
    }
    contentQuery = standardContent(contentQuery);
    return setQuery(isMutipleSelectInTag, contentQuery);
  };
  let game_url = 'https://www.freetogame.com/api/' + handlerQuery(filter);
  useEffect(() => {
    fetch(game_url)
      .then(res => res.json())
      .then(data => setGames(data))
      .catch(error => console.log(error));
  }, [game_url]);
  return (
    <Fragment>
      {hasGame &&
        games.slice(0, 99).map(game => {
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
