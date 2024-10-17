import React from 'react'
import styles from './QuestionCard.module.css'

const CompletedCard = ({number}) => {
  return (
    <div className={styles.completedCard}>
        <h1 className={styles.completedText}>{`Question ${number}`}</h1>
    </div>
  )
}

export default CompletedCard