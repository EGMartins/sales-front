import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios-auth'


Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        authToken: localStorage.getItem('token') || null,
        salesData: null,
        salesYearData: null,
        twoYearsData: null
    },
    getters: {
        allData: state => {
            return state.salesData
        },
        yearSales: state => {
            return state.salesYearData
        },
        twoYearsSales: state => {
            return state.twoYearsData
        },
        authToken: state => {
            return state.authToken
        },
        isAuthenticate: state => {
            return state.authToken !== null
        }
    },
    mutations: {
        authUser(state, userData) {
            state.authToken = userData.token
        },
        deauthUser(state) {
            state.authToken = null
        },
        unsetSales(state) {
            state.salesData = null
        },
        unsetYearSales(state) {
            state.salesYearData = null
        },
        unsetTwoYearsSales(state) {
            state.twoYearsData = null
        },
        salesData(state, salesData) {
            state.salesData = salesData.sales
        },
        salesYearData(state, salesYearData) {
            state.salesYearData = salesYearData.sales
        },
        twoYearsData(state, twoYearData) {
            state.twoYearsData = twoYearData.sales
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
                this.$router.push('dashboard')
            })
            .catch(error => { console.log(error) })
        },
        logout({commit}) {
            localStorage.removeItem('token')
            commit('deauthUser')
            commit('unsetSales')
            commit('unsetYearSales')
            commit('unsetTwoYearsSales')
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
        },
        fetchTwoYearsSales({commit}) {
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
            axios.get('/two_years_sales')
            .then(res => {
                console.log(res.data)
                commit('twoYearsData', {
                    sales: res.data
                })
            })
            .catch(error => console.log(error))
        }
    }
})
