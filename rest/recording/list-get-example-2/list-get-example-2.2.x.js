// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

client.recordings.list({ dateCreated: '2016-10-18' }, function(err, data) {
  data.recordings.forEach(function(recording) {
    console.log(recording.CallSid);
  });
});
