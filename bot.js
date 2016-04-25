var Botkit = require('botkit');
var exec = require('child_process').exec;

var airport = '/System/Library/PrivateFrameworks/Apple80211.framework/Versions/Current/Resources/airport'
var interval = 10000;
var channel = '';
var message = ''

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  token: ''
});
bot.startRTM(function(err, bot, payload){
  if(err){
    throw new Error('Could not connect to Slack');
  }
  var a = '';
  // scan wifi access point
  setInterval(function(){
    exec(airport + ' -s | grep FOO-*', function(err, stdout, stderr){
      if(stdout.length > 0){
        console.log("found:" + stdout);
        var _a = ''
        points = stdout.split("\n");
        for(i = 0; i < points.length; i++){
          p = points[i].replace(/^\s+/g, "").split(' ');
          _a = _a + p[0] + '\n';
        }
        // fixme: manage access points which were already scanned
        if(a !== _a){
          a = _a;
          bot.say({
            "text": message + '\n'+ a,
            "channel": channel
          });
        }
      }
    });
  }, interval);
});
