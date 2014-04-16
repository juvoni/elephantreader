var nconf = require('nconf');

nconf.file('settings.json').env();

var client = new Evernote.Client.new({
  consumerKey: nconf.get('Consumer Key'),
  consumerSecret: nconf.get('Consumer Secret'),
  sandbox: true // Optional (default: true)
});
/*
client.getRequestToken('YOUR CALLBACK URL', function(error, oauthToken, oauthTokenSecret, results) {
  // store tokens in the session
  // and then redirect to client.getAuthorizeUrl(oauthToken)
});
*/