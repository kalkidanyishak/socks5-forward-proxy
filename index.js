const socks = require('socksv5');
const port = process.env.PORT || 3001;

const srv = socks.createServer(function(info, accept, deny) {
  accept();
});
srv.listen(port, 'localhost', function() {
  console.log('SOCKS server listening on port '+port);
});

srv.useAuth(socks.auth.UserPassword(function(user, password, cb) {
  cb(user === 'nodejs' && password === 'rules!');
}));
