const Loop = require('chatloop').Loop;
const helloLoop  = require('./helloLoop');

module.exports = function(event) {
    let ArrayOfLoops = [];
    ArrayOfLoops.push(new Loop(
       'helloLoop',
        function() {
          helloLoop(event)
       }
    ));
    
    Loop.findCurrentLoop('helloLoop', ArrayOfLoops);
}

