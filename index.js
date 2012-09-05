(function() {
  var fs   = require('fs'),
      path = require('path');

  module.exports = function(dir, basenames) {
    var requires = {};
  
    if (arguments.length === 1) {  
      var files = fs.readdirSync(dir);
      
      // sort files in lowercase alpha for linux
      files.sort(function(a,b) {
        a = a.toLowerCase(); 
        b = b.toLowerCase();
        
        if (a < b) {
          return -1;
        } else if (b < a) { 
          return 1;
        } else {
          return 0; 
        }
      });
            
      files.forEach(function(filename) {
  
        if ((filename === 'index.js') || (filename[0] === '_')) { return; }

        var ext = path.extname(filename);
        if (!(ext in require.extensions)) { return; }
    
        filename = path.basename(filename, ext);
        var filepath = path.join(dir, filename);
    
        requires[filename] = require(path.resolve(filepath));
      });
  
    } else {
      basenames.forEach(function(basename) {
        var filepath = path.join(dir, basename);
        requires[filename] = require(path.resolve(filepath));
      });
    }
  
    return requires;
  };
})();