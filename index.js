var fs   = require('fs'),
    path = require('path');

module.exports = function(dir) {
  var requires = {};
  
  fs.readdirSync(dir).forEach(function(filename) {
  
    if ((filename === 'index.js') ||
        (filename === 'index.coffee') ||
        (filename[0] === '_')) { 
      return; 
    }
    
    filename = path.basename(filename, path.extname(filename));
    var filepath = path.join(dir, filename);
    
    requires[filename] = require(filepath);
  });
  
  return requires;
};