import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    user: null
}

const mutations = {
    login(state,user) {
        state.user = user
    },
    logout() {
        state.user = null;
    }
}

export default new Vuex.Store({
    state,
    mutations
})