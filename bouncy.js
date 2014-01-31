var bouncy = require('bouncy');

var server = bouncy(function (req, res, bounce) {
  console.log('bouncy received request for: ' + req.headers.host);

  if ( req.headers.host.toLowerCase().indexOf('apotheosisentertainment.com') != -1 ) {
    bounce(6007);
  }
  else if (req.headers.host.toLowerCase().indexOf('junctiongis.com') != -1 ) {
    bounce(6008);
  }
  else if (req.headers.host.toLowerCase().indexOf('bandstock.org') != -1 ) {
    bounce(6009);
  }
  else{
    bounce(6007);
  }

});

server.listen(80);
