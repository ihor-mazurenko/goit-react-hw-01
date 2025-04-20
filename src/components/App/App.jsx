import { useState } from 'react'
import './App.css'
import userData from '../../userData.json'
import Profile from '../Profile/Profile'

export default function App() {
  return (
      <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}/>
      </> 
  )
}

