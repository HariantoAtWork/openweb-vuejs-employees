var Vue = require('vue');

require('./use')(Vue);
require('./filter')(Vue);
require('./directive')(Vue);
require('./component')(Vue);

module.exports = Vue;