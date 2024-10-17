import React from "react";
import styles from "./users.module.css";
import SearchInput from "../../search-input/SearchInput";

const Users = () => {
  const handleSearchInputChange = (value) => {
    console.log("Search term:", value);
  };
  return (
    <div className={styles.mainContainer}>
      <div className="p-7 px-20 flex justify-between  items-center">
        <h1 className={styles.headText}>Participants</h1>
        <SearchInput onSearchInputChange={handleSearchInputChange} />
        
      </div>
    </div>
  );
};

export default Users;
