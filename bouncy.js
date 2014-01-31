var bouncy = require('bouncy');

var server = bouncy(function (req, res, bounce) {
  console.log('bouncy recieved request');

  // Fancy way to check if user is navigating to this url
  if ( ~req.headers.host.indexOf('apotheosisentertainment.com') ) {
    console.log('header has apotheosisentertainment.com')
    bounce(6007);
  }
});

server.listen(6008);