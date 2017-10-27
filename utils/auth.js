// TODO: Let's create a method to check on load, if the JWT access token is still valid, or if we need to refresh it by a call to the auth/refresh api endpoint

import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

export const SetJWT = (jwt) => {
    if(process.SERVER_BUILD) return;

    if(typeof window !== 'undefined'){
        window.localStorage.setItem('jwt', JSON.stringify(jwt));
        window.localStorage.removeItem('logout');
    }

    Cookie.set('jwt', JSON.stringify(jwt));
}

export const UnsetJWT = () => {
    if(process.SERVER_BUILD) return;

    if(typeof window !== 'undefined'){
        window.localStorage.removeItem('jwt');
        window.localStorage.setItem('logout', Date.now());
    }

    Cookie.remove('jwt');
}

export const GetJWTFromCookie = (req) => {
    if(!req.headers.cookie) return;

    const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));

    if(!jwtCookie) return;

    const jwt = jwtCookie.split('=')[1];

    return JSON.parse(unescape(jwt));
}

export const GetJWTFromLocalStorage = () => {
    const jwt = window.localStorage.jwt;

    return jwt ? JSON.parse(jwt) : undefined;
}