import { PopupContext } from 'app/ui/context/PopupContext';
import { useContext } from 'react';
import Popup from 'reactjs-popup';
import RenderBasicContentPopup from './ContentPopup/RenderBasicContentPopup';
import RenderBasicHeaderPopup from './HeaderPopup/RenderBasicHeaderPopup';
import './index.scss';

interface Props {
  open: boolean | undefined;
  closeModal: () => void;
  onOpenPopup: () => void;
}

const PopupExample = (props: Props) => {
  const { open, closeModal, onOpenPopup } = props;
  return (
    <Popup
      key="popup-1"
      open={open}
      className="popup-overlay"
      closeOnDocumentClick
      onClose={closeModal}
      modal
      trigger={
        <button type="button" className="button">
          Controlled Popup
        </button>
      }
    >
      <div className="modal">
        <div className="close" onClick={closeModal}>
          &times;
        </div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae magni omnis delectus nemo,
        maxime molestiae dolorem numquam mollitia, voluptate ea, accusamus excepturi deleniti
        ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
      </div>
    </Popup>
  );
};

export default PopupExample;
