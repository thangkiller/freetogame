import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { Games, Category } from '~/component';
import { sidebarList } from './sidebarList';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
const seperatorSelections = '.';
const seperatorFilters = '&';

function HomePage() {
  const [filters, setFilters] = useState([]);
  function filter(name, selection) {
    this.name = name;
    this.selections = [selection];
    this.includedSelection = selection => {
      return this.selections.includes(selection);
    };
    this.hasSelections = () => this.selections.length >= 2;
    this.appendSelection = selection => {
      this.selections.push(selection);
    };
    this.removeSelection = selectionNeedDeleted => {
      this.selections = this.selections.filter(
        selection => selection !== selectionNeedDeleted
      );
    };
    this.switchSelection = selection => {
      if (this.includedSelection(selection)) {
        this.removeSelection(selection);
      } else {
        this.appendSelection(selection);
      }
    };
    this.join = seperator => {
      return `${this.name}=${this.selections.join(seperator)}`;
    };
  }
  function handlerSelection(feature, type) {
    const selectionFilterIndex = findFilterIndexOfSelection(type);
    const notTypeInFilters = selectionFilterIndex === -1;
    if (notTypeInFilters) {
      insertNewTypeToFilters(feature, type);
    } else {
      filters[selectionFilterIndex].switchSelection(feature);
      setFilters([...filters]);
    }
  }
  function findFilterIndexOfSelection(type) {
    return filters.findIndex(filter => filter.name === type);
  }
  function insertNewTypeToFilters(feature, type) {
    setFilters([...filters, new filter(type, feature)]);
  }
  function transformFilterToString(filters) {
    const selectionStringList = filters.map(filter => {
      const selectionString = filter.join(seperatorSelections);
      return selectionString;
    });
    return selectionStringList.join(seperatorFilters);
  }
  const hasTags = filters.some(filter => filter.hasSelections());
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
                select={(feature, type) => handlerSelection(feature, type)}
              />
            );
          })}
        </div>
        <div className={cx('main')}>
          <Games
            filtersString={transformFilterToString(filters)}
            mutiTag={hasTags}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
