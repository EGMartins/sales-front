import Login from './components/Home/Login.vue'
import Signup from './components/Home/Signup.vue'
import Dashboard from './components/Dashboard/dashboard.vue'

export const routes = [
    { path: '/', component: Login },
    { path: '/signup', component: Signup },
    { path: '/dashboard', component: Dashboard }
]