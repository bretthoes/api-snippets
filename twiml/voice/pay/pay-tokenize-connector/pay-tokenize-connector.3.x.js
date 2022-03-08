const VoiceResponse = require('twilio').twiml.VoiceResponse;

const response = new VoiceResponse();
response.pay({
    chargeAmount: '0',
    paymentConnector: 'My_Payment_Connector', 
    action: 'https://your-callback-function-url.com/pay'
});

console.log(response.toString());
