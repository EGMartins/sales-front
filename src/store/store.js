import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        authToken: localStorage.getItem('token') || '',
        salesData: null,
        salesYearData: null
    },
    getters: {
        allData: state => {
            return state.salesData
        },
        yearSales: state => {
            return state.salesYearData
        },
        authToken: state => {
            return state.authToken
        }
    },
    mutations: {
        authUser(state, userData) {
            state.authToken = userData.token
        },
        deauthUser(state) {
            state.authToken = ''
        },
        unsetSales(state) {
            state.salesData = null
        },
        unsetYearSales(state) {
            state.salesYearData = null
        },
        salesData(state, salesData) {
            state.salesData = salesData.sales
        },
        salesYearData(state, salesYearData) {
            state.salesYearData = salesYearData.sales
        }
    },
    actions: {
        signup({commit}, auhtData) {
            axios.post('/signup', auhtData)
            .then(res => {
                console.log(res)
                let token = res.data.auth_token
                commit('authUser', {
                    token: token
                })
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
            })
            .catch(error => console.log(error))
        },
        login({commit}, authData) {
            axios.post('/auth/login', authData)
            .then(res => {
                console.log(res)
                let token = res.data.auth_token
                commit('authUser', {
                    token: token
                })
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
            })
            .catch(error => { console.log(error) })
        },
        logout({commit}) {
            localStorage.removeItem('token')
            commit('deauthUser')
            commit('unsetSales')
            commit('unsetYearSales')
        },
        fetchSales({commit}) {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
            axios.get('/sales')
            .then(res => {
                console.log(res.data)
                commit('salesData', {
                    sales: res.data
                })
            })
            .catch(error => console.log(error))
        },
        fetchYearSales({commit}) {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
            axios.get('/this_year_sales')
            .then(res => {
                console.log(res.data)
                commit('salesYearData', {
                    sales: res.data
                })
            })
            .catch(error => console.log(error))
        }
    }
})
