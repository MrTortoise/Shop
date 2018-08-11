import * as React from 'react'
import { Link } from 'react-router-dom';
import Auth from './auth';
import {Button} from 'reactstrap'


interface LoginState{
  loggedIn: boolean,
  username: string,
  key: any
}

const initialState = {loggedIn: false, username: undefined, key: undefined}

export default class Login extends React.Component<{}, LoginState> {
  constructor(){
    super()
    this.state = initialState
  }

  public render() : JSX.Element{
    if (this.state.loggedIn){
      return (
        <div className="logged-in">
          <p>Dave</p>
          <Link to="/">Log Out</Link>
        </div>
      )
    }

    return (
      <Button color="primary" onClick={() => { this.login() }}>Log In</Button>
    )
  }

  private login(){
    const auth = new Auth();
    auth.login();
  }  
}