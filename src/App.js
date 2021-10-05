import "./App.css";
import { UserProvider } from "./context/UserContext";
import { FilterProvider } from "./context/FilterSearch";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <FilterProvider>
          <Routes />
        </FilterProvider>
      </UserProvider>
    </div>
  );
}

export default App;
