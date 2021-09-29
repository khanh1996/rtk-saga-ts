import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function RenderBasicContentPopup(props) {
    return (
        <div className="content-popup-basic" id="m1-o">
            <div className="modal">
                <h1 className="modal__title">Modal 1 Title</h1>
                <p className="modal__text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilis ex dicta maiores libero minus obcaecati iste optio,
                    eius labore repellendus.
                </p>
                <button className="modal__btn">Button →</button>
            </div>
        </div>
    );
}

RenderBasicContentPopup.propTypes = {};

export default RenderBasicContentPopup;
