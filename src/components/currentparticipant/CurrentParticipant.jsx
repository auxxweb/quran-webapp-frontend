import React, { useEffect, useState } from 'react'
import styles from './CurrentParticipant.module.css'
import GradientButton from '../buttons/gradientbutton/GradientButton'
import { useNavigate, useParams } from 'react-router-dom'
import { io } from 'socket.io-client'
import { BASE_URL } from '../../utils/constant'
import { useHttpRequests } from '../../api/api'
import { useAppSelector } from '../../redux/store'
import { Bounce, toast } from 'react-toastify'
var socket
const CurrentParticipant = () => {
  const { judge } = useAppSelector((state) => state.judge)

  const navigate = useNavigate()
  const [userData, setUserData] = useState(null)
  const { post, get } = useHttpRequests()
  const { id } = useParams()
  useEffect(() => {
    (async () => {
      const data = await get('/judge/users/' + id)
      if (data?.success) {
        setUserData(data?.participant)
      } else {
        navigate("/judge");
      }
    })()
  }, [id])
  useEffect(() => {
    socket = io(BASE_URL)
    socket.emit('join', judge?.zoneId)

    socket.on('proceed-question', ({ success, resultId, questionId }) => {
      if (success && resultId && questionId) {
        navigate('/judge/question-answer/' + resultId + '/' + questionId)
      }
    })

    return () => {
      socket.off('selected-participant')
    }
  }, [])

  const onClick = async () => {
    const data = await post('/judge/users/proceed-to-question', {
      participant_id: id,
      startTime: new Date(),
    })
    if (!data?.success) {
      toast.warning('Questions list empty, try again...', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }

    if (data?.success) {
      const resultId = data?._id ?? data?.result?._id

      socket.emit('proceed-question', {
        success: true,
        resultId,
        zoneId: judge?.zoneId,
        questionId: data?.questionId,
      })
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <div className={styles.card_welcome_title_div}>
          <h1 className={styles.card_title}>Current participant</h1>
        </div>

        <div className={styles.image_div}>
          <img
            src={userData?.image ?? '/images/profileImage.jpg'}
            className={styles.user_image}
            alt=""
          />
        </div>

        <h1 className={styles.card_name}>{userData?.name}</h1>
        {judge?.isMain && (
          <GradientButton onClick={onClick} titile="Proceed to Question" />
        )}
      </div>
    </div>
  )
}

export default CurrentParticipant
