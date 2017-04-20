var updateIframe = function(el, source) {
	var iframe = el,
		doc,
		html;

	if('contentDocument' in iframe) {
		doc = iframe.contentDocument;
	} else if('contentWindow' in iframe) {
		if('document' in iframe.contentWindow) {
			doc = iframe.contentWindow.document;
		} else {
			doc = iframe.contentWindow;
		}
	}
	if(doc !== undefined) {
		doc.open();
		doc.writeln(source);
		doc.close();

		try {
			var body = doc.body;
			var html = doc.documentElement;
			iframe.style.height = "auto"; // reset size;
			var docHeight = Math.max( body.scrollHeight, body.offsetHeight,
									html.clientHeight, html.scrollHeight, html.offsetHeight );
			
			iframe.style.height = (docHeight > 300 ? docHeight : 300)+"px";
		} catch(error) {
			console.log(error);
		}
		
	}
}

var directive = {
	inserted (el, binding, vnode, oldVnode) {
		updateIframe.call(this, el, binding.value)
	},
	update (el, binding, vnode, oldVnode) {
		console.log('update')
		updateIframe.call(this, el, binding.value)
	}
}

// v-iframe.js
module.exports = directive;