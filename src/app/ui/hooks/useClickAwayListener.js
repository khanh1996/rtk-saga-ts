import { useEffect } from 'react';

//useClickAwayListener(wrapperRef, () => console.log('clicked outside'));
//<div style={{width: '200px', height: '50px'}} ref={wrapperRef} />
const useClickAwayListener = (ref, callback) => {
  // Call the callback function if clicked on outside of element
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};

export default useClickAwayListener;
