import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'dinoroar.eu.auth0.com',
    clientID: 'dHLLTXTzCy8ca0vWHdI8NfdKhJa51Jvh',
    redirectUri: 'http://localhost:4000/callback',
    audience: 'https://dinoroar.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}