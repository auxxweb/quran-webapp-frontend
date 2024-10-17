import React from 'react'
import styles from "./Card.module.css";

const NextCard = ({number}) => {
  return (
    <div className={styles.nextCard}>
        <h1 className={styles.completedText}>{`Q${number}`}</h1>
    </div>
  )
}

export default NextCard