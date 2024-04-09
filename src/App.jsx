import React from "react";

import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import store from "./redux/store";
import PathWrapper from "./layouts/PathWrapper";
import { ConfigProvider } from "antd";
function App() {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "green",
            borderRadius: 2,

            // Alias Token
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        <PathWrapper />
      </ConfigProvider>
    </Provider>
  );
}

export default App;
