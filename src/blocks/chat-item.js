import React from 'react';
import "../css/Chat-item.scss";
import workImage from "../img/Shape.png";
import fitnessImage from "../img/Shape2.png";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const images = [workImage, fitnessImage]

    return (
        <section className="Chat-item"
            id={props.index}
            onClick={props.onItemClick}
            style={{
                backgroundImage: `url(${images[props.index]})`,
                backgroundSize: "100 %",
                // eslint-disable-next-line no-dupe-keys
                backgroundSize: "cover"
            }}
        />
    )
}