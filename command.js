var fs = require('fs');

module.exports = {


  pwd: function(cmd){
      if(cmd === 'pwd'){
      process.stdout.write("process.cwd()");
    }
  },

  ls: function(cmd){
    if(cmd === 'ls'){
      fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
          process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
      });
    }
  },

//don't forget to put something back in bash.js
  env: function(cmd){
    if(cmd.substr(0, 3) === 'env'){
      var envVar = cmd.substr(4).toUpperCase();
      var keyArr = Object.keys(process.env);

      if(keyArr.includes(envVar)){
        process.stdout.write(process.env[envVar]);
      }else{
        process.stdout.write('undefined');
      }

    }
  },

  echo: function(cmd){
    if(cmd.substr(0, 4) === 'echo'){
      process.stdout.write(cmd.substr(5));
    }
  }



}


