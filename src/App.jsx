import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Data } from "./Store/Data";

function App() {
  return (
    <Data>
      <Header />
      <Outlet />
      <Footer />
    </Data>
  );
}

export default App;
