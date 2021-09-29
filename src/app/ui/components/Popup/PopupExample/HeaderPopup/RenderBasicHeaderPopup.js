import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
const RenderBasicHeaderPopup = (close) => {
    return (
        <div className="head-popup-basic">
            <label htmlFor="title-popup">Title popup</label>
            <button
                className="popup-action-close"
                type="button"
                onClick={close}
            />
        </div>
    );
};

RenderBasicHeaderPopup.propTypes = {};

export default RenderBasicHeaderPopup;
