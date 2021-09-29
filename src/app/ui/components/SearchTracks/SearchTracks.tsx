import React from 'react';
import PropTypes from 'prop-types';

import styles from './searchTracks.module.css';
interface Props {
  placeholder?: string;
  searchText: string;
  classNames?: string;
}

const SearchTracks = (props: Props) => {
  function onChange() {
    console.log('a');
  }
  return (
    <div className={styles.WrapperInput}>
      <input placeholder="Search..." onChange={onChange} className={styles.input} />
    </div>
  );
};

SearchTracks.propTypes = {};

export default SearchTracks;
