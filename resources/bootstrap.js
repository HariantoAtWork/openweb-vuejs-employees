import Vue from './vue/init/Vue'
import App from './vue/component/App'
import './scss/main.scss'

const app = new Vue(App)
app.$mount('app')

// Inject webpack's livereload script, when it's not embedded into the bundle but the dev-server is running.
if (INJECT_WEBPACK_DEV_SERVER_SCRIPT && (location.hostname === 'localhost' || location.hostname === 'dev.bob15')) {
    const s = document.createElement('script')
    s.async = true
    s.src = 'http://localhost:8080/webpack-dev-server.js'
    document.head.appendChild(s)
}
