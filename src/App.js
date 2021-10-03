import "./App.css";
import Chat from "./components/Chat/Chat";
import { UserProvider } from "./context/UserContext";
import { FilterProvider } from "./context/FilterSearch";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <FilterProvider>
          <Chat />
        </FilterProvider>
      </UserProvider>
    </div>
  );
}

export default App;
