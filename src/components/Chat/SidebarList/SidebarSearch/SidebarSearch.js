import { useFilter } from "../../../../context/FilterSearch";

import { useTheme } from "../../../../context/ThemeContext";
import Input from "../../../Input/Input";
import styles from "./sidebar-search.module.css";

function SidebarSearch() {
  const { theme } = useTheme();

  const { filterSearch, setFilterSearch } = useFilter();
  return (
    <div className={styles.search}>
      <Input 
        type="text"
        id={styles.friends_search}
        placeholder="Search"
        className={`${styles.friends_top_search} ${
          theme === "dark" ? styles.friends_top_search_dark : ""
        }`}
        value={filterSearch}
        onChange={(e) =>
          setFilterSearch(e.target.value.trim().toLocaleLowerCase())
        }
      />
      
    </div>
  );
}

export default SidebarSearch;
