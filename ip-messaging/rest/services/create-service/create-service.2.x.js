const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const IpMessagingClient = require('twilio').IpMessagingClient;

const client = new IpMessagingClient(accountSid, authToken);

client.services
  .create({
    friendlyName: 'friendly_name',
  })
  .then(function(response) {
    console.log(response);
  })
  .fail(function(error) {
    console.log(error);
  });
