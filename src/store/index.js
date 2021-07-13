import {createStore} from "vuex";

export default createStore({
    state: {
        loading: false,
        token:''
    },
    mutations: {
        showLoading(state){
            state.loading = true
        },
        hideLoading (state) {
            state.loading = false
        }},
});
