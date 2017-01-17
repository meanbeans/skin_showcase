const fs = require('fs');

module.exports = {

  context: __dirname + '/app/assets/javascripts',

  entry: {
    application: fs.readdirSync('app/assets/javascripts')
  },

  output: {
    path: __dirname + "/public",
    filename: "javascripts/[name].js"
  }

};
