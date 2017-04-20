import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Initial state
const state = {
	activePage: 'home',
    myTracks: {},
    showOverlay: false
}

// Actions
const actions = {
    SET_ACTIVEPAGE: ({ commit }, text) => {
        commit('SET_ACTIVEPAGE', text)
    },
    // SET_TRACK: ({ commit }, { data }) => {
    //     commit('SET_TRACK', { data })
    // },
    // SET_OVERLAY: ({ commit }, bool) => {
    //     commit('SET_OVERLAY', bool)
    // },
}

// Mutations
const mutations = {
    SET_ACTIVEPAGE: (state, text) => {
        state.activePage = text
    },
    // SET_TRACK: (state, { data }) => {
    //     state.myTracks = Object.assign(state.myTracks, data)
    // },
    // SET_OVERLAY: (state, bool) => {
    //     state.showOverlay = bool
    // },
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store