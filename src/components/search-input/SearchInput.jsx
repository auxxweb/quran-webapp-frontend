import React, { useState } from "react";
import styles from "./search.module.css";

const SearchInput = ({ onSearchInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.mainDiv}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.searchInput}
      />

      <button
        onClick={() => {
          onSearchInputChange(inputValue);
        }}
        className={styles.button}
      >
        SEARCH
      </button>
    </div>
  );
};

export default SearchInput;
