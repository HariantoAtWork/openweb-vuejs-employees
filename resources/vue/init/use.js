// file: vue/init/use.js

// doc: https://vuejs.org/v2/guide/plugins.html
import VueRx from 'vue-rx'
import {Observable} from 'rxjs/Observable'
import {Subscription} from 'rxjs/Subscription'

module.exports = function (Vue) {
	Vue.use(VueRx, {Observable, Subscription})
	Vue.prototype.loadJSON = function(file) {
		return require(`../data/${file}.json`)
	}
	
	return Vue;
}