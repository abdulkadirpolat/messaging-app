import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const FetchContext = createContext();

const FetchProvider = ({ children }) => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const values = { fetchData, setFetchData, isLoading, setIsLoading };

  useEffect(() => {
    async function FetchUsersData() {
      await axios
        .get("data.json")
        .then((res) => setFetchData(res.data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
    FetchUsersData();
  }, []);

  return (
    <FetchContext.Provider value={values}>{children} </FetchContext.Provider>
  );
};

const useFetch = () => useContext(FetchContext);

export { FetchProvider, useFetch };
