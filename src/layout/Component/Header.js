import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGift,
  faMagnifyingGlass,
  faSquare,
} from '@fortawesome/free-solid-svg-icons';
import logo from '~/assets/images/logo.png';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('nav')}>
        <div className={cx('nav--left')}>
          <Link
            to="/"
            className={cx('nav--left--item', 'nav--left--item__icon')}
          >
            <img src={logo} alt="logo" />
          </Link>
          <div className={cx('nav--left--item')}>Free Games</div>
          <div className={cx('nav--left--item')}>Browser Games</div>
          <div className={cx('nav--left--item')}>Special Offers</div>
          <div className={cx('nav--left--item')}>Top 2022</div>
          <div className={cx('nav--left--item', 'nav--left--item__more')}></div>
        </div>
        <div className={cx('nav--right')}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={cx('nav--right--item')}
          />
          <FontAwesomeIcon icon={faGift} className={cx('nav--right--item')} />
          <FontAwesomeIcon icon={faSquare} className={cx('nav--right--item')} />
          <div className={cx('nav--right--item', 'nav--right--item__logIn')}>
            log in
          </div>
          <button className={cx('nav--right--item', 'nav--right--item__join')}>
            join free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
