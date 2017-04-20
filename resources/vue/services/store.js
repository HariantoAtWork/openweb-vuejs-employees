import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Initial state
const state = {
	activePage: 'home',
    employees: []
}

// Actions
const actions = {
    SET_ACTIVEPAGE: ({ commit }, text) => {
        commit('SET_ACTIVEPAGE', text)
    },
    SET_EMPLOYEES: ({ commit }, list) => {
        commit('SET_EMPLOYEES', list)
    },

}

// Mutations
const mutations = {
    SET_ACTIVEPAGE: (state, text) => {
        state.activePage = text
    },
    SET_EMPLOYEES: (state, list) => {
        state.employees = list
    },

}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store