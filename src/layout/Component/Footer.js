import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import logoFooter from '~/assets/images/logo-footer.png';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
const part_1 = {
  columns: [
    ['About Us', 'API', 'Contact Us'],
    ['Help/FAQ', 'Support & Bugs', 'Feature Request'],
    ['Privacy Policy', 'Cookies Policy', 'Terms of Use'],
  ],
  logo: logoFooter,
};

function Footer() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('part-1')}>
        {part_1.columns.map((column, index) => {
          return (
            <div className={cx('part-1--column')} key={index}>
              {column.map((item, index) => {
                return (
                  <a key={index} className={cx('part-1--column--item')}>
                    {item}
                  </a>
                );
              })}
            </div>
          );
        })}
        <div className={cx('part-1--column', 'part-1-column__logo')}>
          <img src={logoFooter} alt="logo-footer" />
        </div>
      </div>
      <div className={cx('part-2')}>
        <div className={cx('part-2--item', 'part-2--item__copyright')}>
          © 2022 Digiwalls Media, all rights reserved. All trademarks are
          property of their respective owners.
        </div>
        <div className={cx('part-2--item', 'part-2--item__contacts')}>
          <a>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a>
            <FontAwesomeIcon icon={faWifi} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
