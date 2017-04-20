import Layout from '../component/layout/Layout'
import NotFound from '../component/section/NotFound'

const routes = [
    { path: '/', component: Layout },
    { path: '*', component: NotFound }
]

export default routes