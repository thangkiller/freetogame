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
        <div className={cx('sidebar--sort')}>
          <div className={cx('sidebar--sort--title')}>
            <button>Sort By:</button>
            <FontAwesomeIcon icon={faUpDown} />
          </div>
          <div className={cx('sidebar--sort--select')}>
            <div className={cx('sidebar--sort--select--title')}>Platform</div>
            <ul>
              <li>PC</li>
              <li>Browser</li>
            </ul>
          </div>
        </div>
        <div className={cx('sidebar--filter')}>
          <div className={cx('sidebar--filter--title')}>
            <button>Filter Type:</button>
            <FontAwesomeIcon icon={faUpDown} />
          </div>
          <div className={cx('sidebar--filter--select')}>
            <div className={cx('sidebar--filter--select--title')}>Genre</div>
            <ul>
              {genres.map((genre, index) => {
                return <li key={index}>{genre}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className={cx('sidebar--catetory')}>
          {catetory.map((item, index) => {
            return (
              <div className={cx('sidebar--catetory--select')}>
                <div className={cx('sidebar--catetory--select--title')}>
                  {item.name}
                </div>
                <ul>
                  {item.types.map((type, index) => {
                    return <li key={index}>{type}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className={cx('sidebar--tag')}>
          <div className={cx('sidebar--tag--select')}>
            <div className={cx('sidebar--tag--select--title')}>Tags</div>
            <ul>
              {tags.map((tag, index) => {
                return <li key={index}>{tag}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={cx('main')}></div>
    </div>
  );
}

export default HomePage;
