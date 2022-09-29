// Views
import Home from '../../views/Home'
import Admin from '../../views/Admin'
import AddAdmin from '../../views/AddAdmin'

const homeRouter = [
  { path: '/', exact: true, isAuth: false, layout: 'main', component: Home },
  {
    path: '/admin',
    exact: true,
    isAuth: true,
    layout: 'main',
    component: Admin
  },
  {
    path: '/AddAdmin',
    exact: true,
    isAuth: true,
    layout: 'main',
    component: AddAdmin
  }
]

export default homeRouter
