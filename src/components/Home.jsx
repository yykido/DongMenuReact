import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';


const Home = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()


  const onButtonClick = () => {
    // You'll update this function later
    if (loggedIn) {
      // Log out logic here, if needed
      // For now, we will just navigate to the login page
    } else {
      navigate('/login')
    }
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}

export default Home