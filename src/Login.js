import React from 'react'
import "./Login.css"
import slackLogo from "./images/slack-logo-1.png"
import { Button } from '@material-ui/core'
import { auth, provider } from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

export default function Login() {

  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        console.log(result, "res")
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        })
      })
      .catch(error => {
        alert(error.message)
      })
  }
  return (
    <div className="login">
      <div className="login__container">
        <img src={slackLogo} />
        <h3>This is slack clone</h3>
        <Button onClick={signIn}>
          Sign In with Google
        </Button>
      </div>

    </div>
  )
}
