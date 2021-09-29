import { colors } from '@apollo/space-kit/colors';
import Modal from 'app/ui/components/Modal/Modal';
import PopupBasic from 'app/ui/components/Popup/PopupBasis/PopupBasic';
import PopupExample from 'app/ui/components/Popup/PopupExample/PopupExample';
import { PopupContext } from 'app/ui/context/PopupContext';
import { useContext, useState } from 'react';
import styled from 'styled-components';

const CustomerInfoPage = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const { onOpenPopup, popup, onClosePopup } = useContext(PopupContext);

  return (
    <CustomerContainer>
      {/* <Modal>
        <h1>adad</h1>
      </Modal> */}
      {/* <ButtonPopup onClick={onClickOpenPopup}>BUTTON OPEN POPUP</ButtonPopup> */}
      <PopupExample open={popup?.open} closeModal={onClosePopup} onOpenPopup={onOpenPopup} />
      <PopupBasic />
    </CustomerContainer>
  );
};
const CustomerContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px;
`;

const ButtonPopup = styled.button`
  border-radius: 8px;
  border: 1px solid ${colors.pink.base};
  background-color: ${colors.pink.base};
  color: ${colors.silver.base};
  outline: none;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: ${colors.pink.dark};
    border: 1px solid ${colors.pink.dark};
  }
`;

export default CustomerInfoPage;
