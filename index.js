(function() {
  var fs   = require('fs'),
      path = require('path');

  module.exports = function(dir, basenames) {
    var requires = {};
  
    if (arguments.length === 1) {  
      var files = fs.readdirSync(dir);
      files.sort(function(a,b) { return a.toLowerCase() - b.toLowerCase() });
      
      files.forEach(function(filename) {
  
        if ((filename === 'index.js') || (filename[0] === '_')) { return; }
    
        filename = path.basename(filename, path.extname(filename));
        var filepath = path.join(dir, filename);
    
        requires[filename] = require(filepath);
      });
  
    } else {
      basenames.forEach(function(basename) {
        var filepath = path.join(dir, basename);
        requires[basename] = require(filepath);
      });
    }
  
    return requires;
  };
})();