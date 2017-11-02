export default ({ store, redirect }) => {
    if(store.getters['auth/IsAuthenticated'] === true)
        redirect('/admin');
}