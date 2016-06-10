/*ENTRY POINT TO THE PLUGIN*/
const studio = require("wakanda-studio-api");

module.exports = {
  init : function() {
  
  },

  consumeWakandaWordCount: function(serviceObj) {
    consumeService(serviceObj)
  }
};
