var command = require("./command.js");

process.stdout.write('prompt > ');

var pwddate = process.stdin.on('data', function (data) {
  var cmd = data.toString().trim();

  command.pwd(cmd);

  command.ls(cmd);

  command.echo(cmd);

  command.env(cmd);

  if(cmd === 'date'){
    var time = new Date();
    var formatted = time.toLocaleString();
    process.stdout.write(formatted);
  }

  process.stdout.write('\nprompt > ');
});
 // console.log(process.env.PATH)
