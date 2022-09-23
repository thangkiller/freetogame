import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import styles from './Home.module.scss';
import { Games, Catetory } from '~/component';

const cx = classNames.bind(styles);

const platform = {
  title: 'Sort By',
  content: [
    {
      name: 'Platform',
      types: ['PC', 'Browser'],
    },
  ],
};

const genres = {
  title: 'Filter Type',
  content: [
    {
      name: 'Genre',
      types: [
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
      ],
    },
  ],
};

const catetory = {
  content: [
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
  ],
};

const tags = {
  content: [
    {
      name: 'Tags',
      types: [
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
      ],
    },
  ],
};

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
          <Catetory group={platform} />
          <Catetory group={genres} scrolling />
          <Catetory group={catetory} titled={false} />
          <Catetory group={tags} titled={false} scrolling />
        </div>
        <div className={cx('main')}>
          <Games />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
