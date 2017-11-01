export default (context) => {
    let store = context.$store;

    if(typeof window !== 'undefined' && typeof window.localStorage !== 'undefined' && typeof window.localStorage.jwt !== 'undefined'){
        //store.state.auth.state.data = JSON.parse(JSON.stringify(window.localStorage.jwt));
        store.commit('auth/UPDATE', JSON.parse(window.localStorage.jwt));
    }
}