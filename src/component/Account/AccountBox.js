import React from "react";
import "./AccountBox.scss";

const AccountBox = (props) => {

    return (
        <div className="AccountBox">
            <span>
                {props.name}
                <br />
                {props.number}
            </span>
        </div>
    )

}

export default AccountBox;