var Ps = require('perfect-scrollbar');

var directive = {
	bind (el, binding, vnode) {
		Ps.initialize(el);
	},
	unbind (el, binding, vnode) {
		Ps.destroy(el);
	}
}

module.exports = directive;