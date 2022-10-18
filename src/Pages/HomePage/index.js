import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Games, Category } from '~/component';
import { sidebarList, TYPES } from './sidebarList';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function HomePage() {
  const [selected, setSelected] = useState({});
  const handlerSelect = (type, feature) => {
    const handlerType = (TYPE, feature) => {
      const hasType = selected[TYPE] !== undefined;
      if (!hasType) {
        setSelected({
          ...selected,
          [TYPE]: [feature],
        });
        return;
      }
      const types = selected[TYPE];
      let newTypes = [];
      const endIndex = types.length - 1;
      if (endIndex === -1) {
        setSelected({
          ...selected,
          [TYPE]: [feature],
        });
      } else {
        for (let i = 0; ; i++) {
          const isEnd = i === endIndex;
          const isExit = types[i] === feature;
          if (isExit) {
            newTypes.push(...types.slice(i + 1, 100));
            break;
          } else {
            if (isEnd) {
              newTypes.push(types[i], feature);
              break;
            } else {
              newTypes.push(types[i]);
            }
          }
        }
        setSelected({
          ...selected,
          [TYPE]: newTypes,
        });
      }
    };
    for (const TYPE of TYPES) {
      if (TYPE === type) {
        handlerType(TYPE, feature);
        break;
      }
    }
  };
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
          {sidebarList.map(group => {
            return (
              <Category
                key={group.id}
                group={group}
                titled={group.title}
                scrolling={group.scroll}
                select={(type, feature) => handlerSelect(type, feature)}
              />
            );
          })}
        </div>
        <div className={cx('main')}>
          <Games filter={selected} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
