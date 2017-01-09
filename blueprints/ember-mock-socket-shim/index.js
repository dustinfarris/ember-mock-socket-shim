/*jshint node:true*/
module.exports = {
  description: 'Installation blueprint for ember-mock-socket-shim',

  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'mock-socket', target: '^6.0.4' }
    ]);
  }
};
