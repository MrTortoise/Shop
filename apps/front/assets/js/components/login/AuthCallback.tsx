import * as React from 'react'
import { Link } from 'react-router-dom';
import {Button} from 'reactstrap'

const initialState = {loggedIn: false, username: undefined, key: undefined}

export default class AuthCallback extends React.Component<{}, {}> {
  constructor(props){
      super()
   
      console.info(`uth callback props: ${JSON.stringify(props)}`)
  }

  public render() : JSX.Element{
      return (<p>authed!</p>)
  }
}