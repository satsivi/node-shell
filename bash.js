var command = require("./command.js");

process.stdout.write('prompt > ');

var pwddate = process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();
  process.stdout.write("\n");
  command.pwd(cmd);

  command.ls(cmd);

  command.echo(cmd);

  command.env(cmd);

  command.cat(cmd);

  command.head(cmd);

  command.tail(cmd);

  command.wc(cmd);

  command.sort(cmd);

  command.uniq(cmd);

  if(cmd === 'date'){
    var time = new Date();
    var formatted = time.toLocaleString();
    process.stdout.write(formatted);
  }


process.stdout.write('prompt > ');
});

 // console.log(process.env.PATH)
