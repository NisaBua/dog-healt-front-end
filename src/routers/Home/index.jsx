// Views
import Home from '../../views/Home'
import Admin from '../../views/Admin'

const homeRouter = [
  { path: '/', exact: true, isAuth: false, layout: 'main', component: Home },
  { path: '/admin', exact: true, isAuth: true, layout: 'main', component: Admin }

]

export default homeRouter
