import { Suspense } from "react";

import "./App.css";
import { Outlet, useNavigation } from "react-router-dom";
import { Container } from "./components/Container/Container";
import Header from "./components/Header/Header";
import { Spin } from "antd";

function App() {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <Container>
        <Spin
          tip="Loading "
          style={{ backgroundColor: "#00000020" }}
          spinning={navigation.state === "loading"}
          size="large"
          fullscreen
        />
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default App;
