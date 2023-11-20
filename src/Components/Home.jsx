import React from 'react'
import "./Home.css"
import { useUserAuth } from '../context/UserAuthContext'
import { Button } from 'react-bootstrap';

const Home = () => {
  const { user, logOut } = useUserAuth();
  console.log(user)


  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className='home'>
      <h2 >Now you are Login {user && user.email}</h2>
      <Button variant='primary' onClick={handleLogOut}>LogOut</Button>
    </div>

  )
}

export default Home