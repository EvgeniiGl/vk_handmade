import Button from "@vkontakte/vkui/dist/components/Button/Button";
import React from "react";
import PropTypes from "prop-types";


const BtnOutline = props => (
    <Button size='l' level="outline" onClick={props.handleClick} className={props.active ? "btn-primary" : "btn-white"}
            data-to={props.data_to}>
        {props.children}
    </Button>
);

BtnOutline.propTypes = {
    data_to: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    active: PropTypes.bool
};

export default BtnOutline;