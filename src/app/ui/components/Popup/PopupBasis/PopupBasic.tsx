import { PopupContext } from 'app/ui/context/PopupContext';
import { useContext } from 'react';
import RenderBasicHeaderPopup from '../PopupExample/HeaderPopup/RenderBasicHeaderPopup';

function PopupBasic() {
  const { onOpenPopup, popup, onClosePopup } = useContext(PopupContext);
  console.log('header');

  return (
    <div>
      <button onClick={() => onOpenPopup(RenderBasicHeaderPopup(onClosePopup), 'content basic')}>
        Basic Popup
      </button>
    </div>
  );
}

export default PopupBasic;
