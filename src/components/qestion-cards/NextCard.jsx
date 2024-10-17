import React from 'react'
import styles from './QuestionCard.module.css'

const NextCard = ({number}) => {
  return (
    <div className={styles.nextCard}>
        <h1 className={styles.completedText}>{`Question ${number}`}</h1>
    </div>
  )
}

export default NextCard