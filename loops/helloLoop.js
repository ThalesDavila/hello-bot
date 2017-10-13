const send = require('chatloop').Send;

module.exports = function(event, status) {
    send.Text(
        event.senderId,
        'Hello, World!'
    );
}