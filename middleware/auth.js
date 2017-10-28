import { GetJWTFromCookie, GetJWTFromLocalStorage } from '~/utils/auth'

export default ({ isServer, store, req }) => {

    // When we are on the dev server and we didn't get any request, 
    // well, we just return, because... this shouldn't happen :)
    if(isServer && !req) return;

    let jwt = null;

    // when we are on the dev server, we can get our jwt data from the cookie
    if(isServer){
        jwt = GetJWTFromCookie(req);
    }else{ // when we are in production mode, we can get the jwt data from the localstorage
        jwt = GetJWTFromLocalStorage();
    }

    store.commit('auth/UPDATE', jwt);
}