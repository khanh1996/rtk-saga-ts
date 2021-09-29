import React from 'react';
import PropTypes from 'prop-types';
import useQueryParams from 'app/ui/hooks/useQueryParams';

function QueryPage(props) {
  const [{ query, rawQuery }, setQuery] = useQueryParams();
  function onCLickButton() {
    setQuery({ page: 2, pageSize: 1 });
  }

  return (
    <div>
      <button onClick={onCLickButton}>CLICK HERE</button>
    </div>
  );
}

QueryPage.propTypes = {};

export default QueryPage;
