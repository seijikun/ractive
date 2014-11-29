import noop from 'utils/noop';

var Doctype = function ( options ) {
	this.declaration = options.template.dd;
};

Doctype.prototype = {
	init: noop,
	render: noop,
	unrender: noop,
	teardown: noop,
	toString: function () {
		return '<!DOCTYPE' + this.declaration + '>';
	}
};

export default Doctype;