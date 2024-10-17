import React from "react";
import styles from "./users.module.css";
import SearchInput from "../../search-input/SearchInput";
import UserCard from "../user-card/UserCard";

const Users = () => {
  const handleSearchInputChange = (value) => {
    console.log("Search term:", value);
  };

  const userDatas = [
    {
      userName: "Muhammed Ali",
      image:
        "https://s3-alpha-sig.figma.com/img/874c/328d/ce99003b34452c91bf7d3d5d855e9980?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzLMsw8nTvraVNifYzDT4eyHHq-W3-AtVvuukikYjC5zQcG~UHthXApkaUBUDXHGWDLELR7Nx35QUWSsPaKlhNeXm7p6VR4HY2GMvhlYmJ6Y0MnWcXfmJamgaYx9qqBwfVG6xPnnZgorTgjGnIY1qT7p70mxltFo7A3TqV3tLT917BTBK9Cj93013tgdfm5WK7qQbKJmQ2DHJcKmwOojCQk8iG7zqnkfaYlkU6PrU5Ot0c60-338v5A~f7yFZWG~zb6LI3KJacgPA0LWKOlVMmW07QF5cbgQCMMwdgx5hiA4YHJwyUrX54ubHP7Kcgz5YgcFtsIdBF3adpGcj9lhdw__",
    },
    {
      userName: "Muhammed Ali",
      image:
        "https://s3-alpha-sig.figma.com/img/874c/328d/ce99003b34452c91bf7d3d5d855e9980?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzLMsw8nTvraVNifYzDT4eyHHq-W3-AtVvuukikYjC5zQcG~UHthXApkaUBUDXHGWDLELR7Nx35QUWSsPaKlhNeXm7p6VR4HY2GMvhlYmJ6Y0MnWcXfmJamgaYx9qqBwfVG6xPnnZgorTgjGnIY1qT7p70mxltFo7A3TqV3tLT917BTBK9Cj93013tgdfm5WK7qQbKJmQ2DHJcKmwOojCQk8iG7zqnkfaYlkU6PrU5Ot0c60-338v5A~f7yFZWG~zb6LI3KJacgPA0LWKOlVMmW07QF5cbgQCMMwdgx5hiA4YHJwyUrX54ubHP7Kcgz5YgcFtsIdBF3adpGcj9lhdw__",
    },
    {
      userName: "Muhammed Ali",
      image:
        "https://s3-alpha-sig.figma.com/img/874c/328d/ce99003b34452c91bf7d3d5d855e9980?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzLMsw8nTvraVNifYzDT4eyHHq-W3-AtVvuukikYjC5zQcG~UHthXApkaUBUDXHGWDLELR7Nx35QUWSsPaKlhNeXm7p6VR4HY2GMvhlYmJ6Y0MnWcXfmJamgaYx9qqBwfVG6xPnnZgorTgjGnIY1qT7p70mxltFo7A3TqV3tLT917BTBK9Cj93013tgdfm5WK7qQbKJmQ2DHJcKmwOojCQk8iG7zqnkfaYlkU6PrU5Ot0c60-338v5A~f7yFZWG~zb6LI3KJacgPA0LWKOlVMmW07QF5cbgQCMMwdgx5hiA4YHJwyUrX54ubHP7Kcgz5YgcFtsIdBF3adpGcj9lhdw__",
    },
    {
      userName: "Muhammed Ali",
      image:
        "https://s3-alpha-sig.figma.com/img/874c/328d/ce99003b34452c91bf7d3d5d855e9980?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzLMsw8nTvraVNifYzDT4eyHHq-W3-AtVvuukikYjC5zQcG~UHthXApkaUBUDXHGWDLELR7Nx35QUWSsPaKlhNeXm7p6VR4HY2GMvhlYmJ6Y0MnWcXfmJamgaYx9qqBwfVG6xPnnZgorTgjGnIY1qT7p70mxltFo7A3TqV3tLT917BTBK9Cj93013tgdfm5WK7qQbKJmQ2DHJcKmwOojCQk8iG7zqnkfaYlkU6PrU5Ot0c60-338v5A~f7yFZWG~zb6LI3KJacgPA0LWKOlVMmW07QF5cbgQCMMwdgx5hiA4YHJwyUrX54ubHP7Kcgz5YgcFtsIdBF3adpGcj9lhdw__",
    },
    {
      userName: "Muhammed Ali",
      image:
        "https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp",
    },
    {
      userName: "Muhammed Ali",
      image:
        "https://s3-alpha-sig.figma.com/img/874c/328d/ce99003b34452c91bf7d3d5d855e9980?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BzLMsw8nTvraVNifYzDT4eyHHq-W3-AtVvuukikYjC5zQcG~UHthXApkaUBUDXHGWDLELR7Nx35QUWSsPaKlhNeXm7p6VR4HY2GMvhlYmJ6Y0MnWcXfmJamgaYx9qqBwfVG6xPnnZgorTgjGnIY1qT7p70mxltFo7A3TqV3tLT917BTBK9Cj93013tgdfm5WK7qQbKJmQ2DHJcKmwOojCQk8iG7zqnkfaYlkU6PrU5Ot0c60-338v5A~f7yFZWG~zb6LI3KJacgPA0LWKOlVMmW07QF5cbgQCMMwdgx5hiA4YHJwyUrX54ubHP7Kcgz5YgcFtsIdBF3adpGcj9lhdw__",
    },
  ];
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headContainer}>
        <h1 className={styles.headText}>Participants</h1>
        <SearchInput onSearchInputChange={handleSearchInputChange} />
      </div>
      <div className={styles.userContainer}>
        {userDatas.map((user) => (
          <UserCard user={user}/>
        ))}
      </div>
    </div>
  );
};

export default Users;
