import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Initial state
const state = {
	activePage: 'home',
    employees: [],
    employee: {}
}

// Actions
const actions = {
    SET_ACTIVEPAGE: ({ commit }, text) => {
        commit('SET_ACTIVEPAGE', text)
    },
    SET_EMPLOYEES: ({ commit }, list) => {
        commit('SET_EMPLOYEES', list)
    },
    SET_EMPLOYEE: ({ commit }, data) => {
        commit('SET_EMPLOYEE', data)
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
    SET_EMPLOYEE: (state, data) => {
        state.employee = data
    },

}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store