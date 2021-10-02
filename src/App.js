import "./App.css";
import Chat from "./components/Chat/Chat";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";
import { FetchProvider } from "./context/FetchContext";
import { FilterProvider } from "./context/FilterSearch";


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <UserProvider>
          <FetchProvider>
            <FilterProvider>
              <Chat />
            </FilterProvider>
          </FetchProvider>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
