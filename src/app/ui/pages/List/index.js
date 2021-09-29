import React from 'react';
import PropTypes from 'prop-types';
import useInfiniteLoading from 'app/ui/hooks/useInfiniteLoading';

function ListPage(props) {
  const { items, hasNext, hasPrevious, loadNext, loadPrevious } = useInfiniteLoading({
    getItems: ({ page }) => {
      console.log('page=>', page);

      return {
        listProduct: [
          {
            id: 1,
            name: 'product 1',
            price: 10,
          },
          {
            id: 2,
            name: 'product 2',
            price: 20,
          },
          {
            id: 3,
            name: 'product 3',
            price: 30,
          },
        ],
        totalPages: 10,
        page: 1,
      };
    },
  });
  return (
    <div>
      <h1>LIST</h1>
      {hasPrevious && <button onClick={() => loadPrevious()}>Load Previous</button>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      {hasNext && <button onClick={() => loadNext()}>Load More</button>}
    </div>
  );
}

ListPage.propTypes = {};

export default ListPage;
