import React from "react";
import { message } from "antd";

const Snackbar = ({ type, content, duration }) => {
  const boxStyle = {
    style: {
      position: "absolute",
      marginTop: "50px",
      top: "24px",
      right: "310px",
      left: "unset",
      bottom: "unset",
    },
  };
  const showMessage = () => {
    switch (type) {
      case "success":
        message.success({
          content,
          duration,
          style: boxStyle,
        });
        break;
      case "error":
        message.error({ content, duration, style: boxStyle });
        break;
      case "info":
        message.info({ content, duration, style: boxStyle });
        break;
      default:
        message.info({ content, duration, style: boxStyle });
    }
  };

  return <>{showMessage()}</>;
};

export default Snackbar;
