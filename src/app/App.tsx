import { useEffect } from "react";
import { usePi } from "../pi/usePi";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

function App() {
  const { isPi } = usePi();

  useEffect(() => {
    console.log("Pi Browser:", isPi);
  }, [isPi]);

  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
