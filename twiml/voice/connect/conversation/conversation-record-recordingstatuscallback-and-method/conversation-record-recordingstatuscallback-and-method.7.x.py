from twilio.twiml.voice_response import Connect, Conversation, VoiceResponse

response = VoiceResponse()
connect = Connect()
connect.conversation(
    service_instance_sid='ISxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    record='record-from-answer',
    recording_status_callback='https://your-recording-status-callback-url.com/',
    recording_status_callback_method='GET')
response.append(connect)

print(response)
