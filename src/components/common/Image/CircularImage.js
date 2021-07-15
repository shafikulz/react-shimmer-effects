import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const CircularImage = ({ size, center, className }) => {
  const style = {};
  if (size) {
    style.width = `${size}px`;
    style.height = `${size}px`;
  }

  return (
    <div
      className={classNames({
        "text-center": center,
      })}
    >
      <div
        style={style}
        className={classNames({
          "shimmer shimmer-avatar": true,
          [className]: className,
        })}
      ></div>
    </div>
  );
};

CircularImage.propTypes = {
  size: PropTypes.number,
  center: PropTypes.bool,
  className: PropTypes.string,
};

CircularImage.defaultProps = {
  canter: false,
};

export default CircularImage;
