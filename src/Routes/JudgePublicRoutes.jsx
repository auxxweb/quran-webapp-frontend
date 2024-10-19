import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { useAppSelector } from '../redux/store';

const JudgePublicRoutes = () => {
    const {judge} = useAppSelector((state) => state.judge);
  return (
    judge ? <Navigate to="/judge"/>  :  <Outlet/>
  )
}

export default JudgePublicRoutes
