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
  },

  cat: function(cmd){
    if(cmd.substr(0, 3) === 'cat'){
      var fileName = "./" + cmd.substr(4);

      fs.readFile(fileName, 'utf8', function (err, data){
        if(err) throw err;
        process.stdout.write(data);
      });
    }
  },

  head: function(cmd){
    if(cmd.substr(0, 4) === "head"){
      var fileName = "./" + cmd.substr(5);
      fs.readFile(fileName, 'utf8', function (err, data){
        if(err) throw err;
        data = data.split("\n");
        data.length = 5;
        data = data.join("\n");
        process.stdout.write(data);
      });
    }
  },

  tail: function(cmd){
    if(cmd.substr(0, 4) === "tail"){
      var fileName = "./" + cmd.substr(5);
      fs.readFile(fileName, 'utf8', function (err, data){
        if(err) throw err;
        data = data.split("\n");
        data = data.slice(data.length - 5);
        data = data.join("\n");
        process.stdout.write(data);
      });

    }
  },

  wc: function(cmd){
    if(cmd.substr(0, 2) === "wc"){
      var fileName = "./" + cmd.substr(3);
      fs.readFile(fileName, 'utf8', function (err, data){
        if(err) throw err;
        data = data.split("\n");
        var length = data.length.toString();
        process.stdout.write(length);
      });
    }
  },

  sort: function(cmd){
    if(cmd.substr(0, 4) === 'sort'){
      var fileName = "./" + cmd.substr(5);
      fs.readFile(fileName, 'utf8', function (err, data){
        if(err) throw err;
        data = data.split("\n");
        data = data.sort().join("\n");
        process.stdout.write(data);
      });
    }
  },

  uniq: function(cmd){
    if(cmd.substr(0, 4) === 'uniq'){
      var fileName = "./" + cmd.substr(5);
      fs.readFile(fileName, 'utf8', function (err, data){
        if(err) throw err;
        data = data.split("\n");
        var nData = [];
        for(var i = 0; i < data.length - 1; i++){
          if(data[i] != data[i+1]){
            nData.push(data[i]);
          }
        }
        nData = nData.join("\n");


        process.stdout.write(nData);
      });
    }
  }


}




