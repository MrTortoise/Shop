import * as React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'reactstrap'
import Login from './login/Login'

interface ShopState{
  name: string
}

const initialState = {name: "unnamed"}

export default class Shop extends React.Component<{}, ShopState> {
  
  constructor(){
    super()
    this.state = initialState;
  }
  public render() : JSX.Element {
    return (
      <div id="shop">
      <header>
      <p>Some shop branding</p>                
      </header>
      <nav>
      <Link to="/">Back to home</Link>
      <Login></Login>
      </nav>
      </div>
    )
  }
}