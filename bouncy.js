var bouncy = require('bouncy');

var server = bouncy(function (req, res, bounce) {
  console.log('bouncy received request for: ' + req.headers.host);

  if ( req.headers.host.toLowerCase().indexOf('apotheosisentertainment') != -1 ) {

    console.log('header has apotheosisentertainment.com')
    bounce(6007);
  }
  else if (req.headers.host.toLowerCase().indexOf('www.sibsco.com') != -1 ) {
    bounce(3456);
  }
  else{
    bounce(6007);
  }

});

server.listen(6008);
