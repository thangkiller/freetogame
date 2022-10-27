import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Games, Category } from '~/component';
import { sidebarList, TYPES } from './sidebarList';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
const seperatorSelections = '.';
const seperatorFilters = '&';

function HomePage() {
  function filter(name, selection) {
    this.name = name;
    this.selections = [selection];
    this.includedSelection = selection => {
      return this.selections.includes(selection);
    };
    this.hasSelections = this.selections.length >= 2;
    this.append = selection => {
      if (!this.includedSelection(selection)) {
        this.selections.push(selection);
      }
      console.log(this);
      return this;
    };
    this.join = seperator => {
      return `${this.name}=${this.selections.join(seperator)}`;
    };
  }
  const [filters, setFilters] = useState([]);
  const insertSelection = (type, feature) => {
    const filterIndex = filters.findIndex(filter => filter.name === type);
    console.log(filterIndex);
    const checkTypeInFilters = filterIndex => {};
    const notTypeInFilters = -1;
    if (filterIndex === notTypeInFilters) {
      setFilters([...filters, new filter(type, feature)]);
      console.log('lenh 1');
    } else {
      console.log('lenh 2', [...[{ t: 1 }], { t: 1 }]);
      setFilters([...filters, filters[filterIndex].append(feature)]);
    }
  };
  const transformFilterToString = filters => {
    const th = filters.map(filter => {
      const t = filter.join(seperatorSelections);
      // console.log(t);
      return t;
    });
    return th.join(seperatorFilters);
  };
  const hasTags = filters.some(filter => filter.hasSelections);
  // console.log(transformFilterToString(filters));
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
                select={(type, feature) => insertSelection(type, feature)}
              />
            );
          })}
        </div>
        <div className={cx('main')}>
          <Games filtersString={'thanhcomg'} mutiTag={hasTags} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
