import Sidebar from "./Components/Sidebar";
import Discover from "./Components/Discover";
import Create from "./Components/Create";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <Create />
    </div>
  );
};

export default App;
