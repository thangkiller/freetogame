import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Catetory.module.scss';
import { faUpDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Catetory({ titled, scrolling = false, group, select }) {
  const selectStyle = cx('sidebar--group--select', {
    'sidebar--group--select__scroll': scrolling,
  });

  return (
    <div className={cx('sidebar--group')}>
      {titled && (
        <div className={cx('sidebar--group--title')}>
          <button>{`${group.title}:`}</button>
          <FontAwesomeIcon icon={faUpDown} />
        </div>
      )}
      {group.content.map((item, index) => {
        return (
          <div key={index} className={selectStyle}>
            <div className={cx('sidebar--group--select--title')}>
              {item.name}
            </div>
            <ul>
              {item.types.map((type, index) => {
                return (
                  <li key={index}>
                    <input
                      type="checkbox"
                      onClick={() => select(group.name, type)}
                    />
                    <span>{type}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default Catetory;
