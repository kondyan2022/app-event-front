import { Suspense } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import { Container } from "./components/Container/Container";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<div>...Loading</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default App;
