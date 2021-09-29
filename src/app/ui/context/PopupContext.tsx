import React, { useState } from 'react';
import Popup from 'reactjs-popup';

interface ContextProps {
  onClosePopup: any;
  onOpenPopup: any;
  popup: PopupType;
}

interface PopupType {
  open: boolean;
  content: any;
  header?: any;
}

interface Props {
  children?: any;
}

export const PopupContext = React.createContext<Partial<ContextProps>>({});
const { Provider } = PopupContext;

function PopupContentProvider(props: Props) {
  const { children } = props;
  // create state global
  const [popup, setPopup] = useState<PopupType>({
    open: false,
    content: '',
    header: '',
  });
  const { open, content, header } = popup;
  const onOpenPopup = (head: any, mess: any) => {
    console.log('onOpenPopup');
    setPopup({
      open: true,
      content: mess,
      header: head,
    });
    console.log(popup);
  };

  const onClosePopup = (callback: any) => {
    console.log('onClosePopup->');
    setPopup({
      open: false,
      content: '',
    });
    console.log(popup);
    if (typeof callback === 'function') return callback();
    return callback;
  };

  // pass param to component to use
  const value = {
    onClosePopup,
    onOpenPopup: (head: any, mess: any) => onOpenPopup(head, mess),
    popup,
  };

  return (
    <Provider value={value}>
      {children}
      <Popup
        // popupRootID="popupRoot"
        className={`p-popup points points-popup`}
        open={open}
        modal
        closeOnDocumentClick
        closeOnEscape
        lockScroll
        onClose={onClosePopup}
        // contentStyle={{
        //     top: "20%",
        // }} position popup
      >
        {() => (
          <div>
            <div className="header-popup">{header}</div>
            <div className="content-popup">{content}</div>
          </div>
        )}
      </Popup>
    </Provider>
  );
}

export default PopupContentProvider;
