// file: src/init/directive.js

// doc: http://vuejs.org/api/#Vue-directive
module.exports = function (Vue) {
	// Example: Vue.directive('iframe',    require('../directive/v-iframe'));
	Vue.directive('scrollbar',    require('../directive/v-scrollbar'));

	return Vue;
}