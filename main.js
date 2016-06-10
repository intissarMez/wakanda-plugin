/*ENTRY POINT TO THE PLUGIN*/
const studio = require("wakanda-studio-api");

module.exports = {
  init : function() {
    return;
  },

  consumeWakandaWordCount: function(serviceObj) {
    consumeService(serviceObj)
  }
};
