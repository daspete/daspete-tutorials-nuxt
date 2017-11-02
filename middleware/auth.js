import { GetJWTFromCookie, GetJWTFromLocalStorage } from '~/utils/auth'

export default({ isServer, store, req }) => {
    // When we are generating the pages, we can't get cookies, very sad...
    if(isServer && !req) return;

    let jwt = isServer ? GetJWTFromCookie(req) : GetJWTFromLocalStorage();

    store.commit('auth/UPDATE', jwt);
}