import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

const state = {
    user: null
}

const mutations = {
    login(state,user) {
        state.user = user
    },
    logout(state,router) {
        state.user = null
        router.push('/')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    plugins: [createPersistedState()]
})