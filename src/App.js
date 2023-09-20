import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import PortfolioPages from "./PortfolioPages/PortfolioPages";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioPages />
    </div>
  );
}
export default App;
