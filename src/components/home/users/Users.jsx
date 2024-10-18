import React, { useEffect, useState } from "react";
import styles from "./users.module.css";
import SearchInput from "../../search-input/SearchInput";
import UserCard from "../user-card/UserCard";
import { get } from "../../../api/api";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const handleSearchInputChange = (value) => {
    fetchUser(value)
  };

  useEffect(() => {
    fetchUser("");
  }, []);

  const fetchUser = async (search) => {
    const data = await get(`/judge/users?currentPage=${currentPage}&&search=${search}`);
    setUserData(data.participants);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headContainer}>
        <h1 className={styles.headText}>Participants</h1>
        <SearchInput onSearchInputChange={handleSearchInputChange} />
      </div>
      <div className={styles.userContainer}>
        {userData.map((user, index) => (
          <UserCard user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Users;
