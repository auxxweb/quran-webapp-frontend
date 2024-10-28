import React, { useEffect } from 'react'
import styles from './home.module.css'
import Users from '../../../components/home/users/Users'
import { useAppSelector } from '../../../redux/store'
// import { BASE_URL } from "../../utils/constant";
import { io } from 'socket.io-client'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../../utils/constant'
import { useHttpRequests } from '../../../api/api'

const Home = () => {
  const { judge } = useAppSelector((state) => state.judge)
  var socket
  const navigate = useNavigate()
  const { get } = useHttpRequests()

  useEffect(() => {
    featchResultDetails()
  }, [])

  const featchResultDetails = async () => {

    const data = await get(`/judge/users/questions/zone/${judge?.zoneId}`)
    if (data && data?.data?.length > 0 ) {
      if(data?.data[0]?.answers?.length > 0){
        navigate(
          '/judge/question-answer/' +
            data?.data[0]?._id +
            '/' +
            data?.data[0]?.currentQuestion,
        )
      }else{
        navigate(
          '/judge/questions-list/' +
            data?.data[0]?._id +
            '/' +
            data?.data[0]?.currentQuestion,
        )
      }
    }
  }

  useEffect(() => {
    console.log('hello how are o', BASE_URL)

    socket = io(BASE_URL)
    socket.emit('join', judge?.zoneId)

    socket.on('proceed-question', ({ success, resultId, questionId }) => {
      console.log(resultId, 'resultId')
      console.log(questionId, 'questionId')
      if (success && resultId && questionId) {
        navigate('/judge/question-answer/' + resultId + '/' + questionId)
      }
    })

    return () => {
      socket.off('selected-participant')
    }
  }, [])

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.WelcomeText}>Welcome<span className={styles?.nameText}>{judge?.name}</span></h2>
          <h2 className={styles.WelcomeText}>
            <img
              className={styles.locationImage}
              src="/images/homeLocation.png"
              alt="location-img"
            />
            {judge?.zone}
          </h2>
        </div>
        {/* <h1 className={styles?.nameText}>{judge?.name}</h1> */}
        <Users />
      </div>
    </div>
  )
}

export default Home
