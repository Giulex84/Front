import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { usePi } from "../pi/usePi";
import MainLayout from "../layouts/MainLayout";
import AppRouter from "./AppRouter";

function App() {
  const { isPi } = usePi();

  useEffect(() => {
    console.log("Pi Browser:", isPi);
  }, [isPi]);

  return (
    <BrowserRouter>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
