import * as React from 'react'
import { Route } from 'react-router-dom'
import Root from './Root'
import Home from './components/Home'
import Counter from './components/Counter'
import Shop from './components/Shop'
import AuthCallback from './components/login/AuthCallback'

export const routes = (
  <Root>
    <Route exact path="/" component={ Home } />
    <Route path="/counter" component={Counter}/>
    <Route path="/shop" component={Shop} />
    <Route path="/callback/:access_token" component={AuthCallback} />
  </Root>
)