import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { parse, stringify } from 'qs';

const useQueryParams = (initialParams) => {
  const { search } = useLocation();
  const { push } = useHistory();

  const query = useMemo(() => {
    const searchQuery = search.substring(1);

    if (!search) {
      return initialParams;
    }

    return parse(searchQuery);
  }, [search, initialParams]);
  console.log('useQuery=> ', query);

  const setQuery = useCallback(
    (nextParams, method = 'push') => {
      console.log('nextParams', nextParams);
      let nextQuery = { ...query };
      console.log('nextQuery', nextQuery);

      if (method === 'remove') {
        Object.keys(nextParams).forEach((key) => {
          delete nextQuery[key];
        });
      } else {
        nextQuery = { ...query, ...nextParams };
      }

      push({ search: stringify(nextQuery, { encode: false }) });
    },
    [push, query]
  );

  return [{ query, rawQuery: search }, setQuery];
};

export default useQueryParams;
