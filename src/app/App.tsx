import { useEffect } from "react";
import { usePi } from "../pi/usePi";
import MainLayout from "../layouts/MainLayout";

function App() {
  const { isPi } = usePi();

  useEffect(() => {
    console.log("Pi Browser:", isPi);
  }, [isPi]);

  return <MainLayout />;
}

export default App;
