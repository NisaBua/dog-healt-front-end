// Views
import Home from '../../views/Home'
import LoginPage from '../../views/Login'


const authRouter = [
  {
    path: '/login',
    exact: true,
    isAuth: false,
    layout: 'main',
    component: LoginPage
  },
  {
    path: '/register',
    exact: true,
    isAuth: false,
    layout: 'full',
    component: Home
  }
]

export default authRouter
