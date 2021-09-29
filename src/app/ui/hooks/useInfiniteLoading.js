import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const useInfiniteLoading = (props) => {
  const { getItems } = props; /* 1 */
  const [items, setItems] = useState([]);
  const pageToLoad = useRef(new URLSearchParams(window.location.search).get('page') || 1); /* 2 */
  const initialPageLoaded = useRef(false);
  const [hasNext, setHasNext] = useState(true);
  const [hasPrevious, setHasPrevious] = useState(() => pageToLoad.current !== 1); /* 2 */
  const history = useHistory();

  const loadItems = useCallback(
    /* 3 */
    async (page, itemCombineMethod) => {
      const data = await getItems(page);
      console.log('data', data);
      console.log('page', page);
      setHasNext(data.totalPages > page); /* 3 */
      setHasPrevious(page > 1); /* 4 */
      setItems((prevItems) => {
        return itemCombineMethod === 'prepend'
          ? [...data.listProduct, ...prevItems]
          : [...prevItems, ...data.listProduct];
      });
    },
    [getItems]
  );

  const loadNext = () => {
    pageToLoad.current = Number(pageToLoad.current) + 1;
    history.replace(`?page=${pageToLoad.current}`);
    loadItems(pageToLoad.current, 'append');
  };

  const loadPrevious = () => {
    pageToLoad.current = Number(pageToLoad.current) - 1; /* 8 */
    history.replace(`?page=${pageToLoad.current}`);
    console.log('previousPage', pageToLoad.current);
    if (pageToLoad.current < 1) return;
    loadItems(pageToLoad.current, 'prepend');
  };

  useEffect(() => {
    if (initialPageLoaded.current) {
      return;
    }

    loadItems(pageToLoad.current, 'append'); /* 5 */
    initialPageLoaded.current = true;
  }, [loadItems]);

  return {
    items,
    hasNext,
    hasPrevious,
    loadNext,
    loadPrevious,
  };
};

useInfiniteLoading.propTypes = {};

export default useInfiniteLoading;
