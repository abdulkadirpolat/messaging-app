import { useState, useContext, createContext } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [filterSearch, setFilterSearch] = useState([]);
  const values = { filterSearch, setFilterSearch };

  return (
    <FilterContext.Provider value={values}>{children} </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
