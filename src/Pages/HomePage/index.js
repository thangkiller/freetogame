import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import styles from './Home.module.scss';
import { faUpDown } from '@fortawesome/free-solid-svg-icons';

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

function HomePage() {
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
                <div className={cx('sidebar--group--select')}>
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
        <div className={cx('main')}></div>
      </div>
    </div>
  );
}

export default HomePage;
