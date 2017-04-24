// file: src/init/component.js

// doc: http://vuejs.org/api/#Vue-component
module.exports = function (Vue) {
	// Layout

	// Objects
	Vue.component('Markdown',           require('../component/object/Markdown.vue'));

	// Pages
	Vue.component('SectionEmployees',   require('../component/section/Employees.vue'));
	Vue.component('SectionEmployee',    require('../component/section/Employee.vue'));
	Vue.component('NotFound',           require('../component/section/NotFound.vue'));
	

	return Vue;
}