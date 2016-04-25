# scan-wifi-bot
Bot which scans specified wifi access points and sends notification to slack when it is detected.

## Prerequisite
- `<token>:` slack bot user and its token (see also https://api.slack.com/bot-users)
- `<channel id>:` slack channle id (You can get from https://api.slack.com/methods/channels.list/test by clicking "Test Method" button)

## Setup
##### 1.  Add channel id to the line 6 on bot.js
```js
var channel = <channel id>;
```

##### 2. Update FOO-* to any SSID name
```js
    exec(airport + ' -s | grep FOO-*', function(err, stdout, stderr){
```

##### 3. Edit message on bot.js (
```js
var message = <message>;
```

##### 4. install node modules
Run the following command on terminal.
```bash
$npm install
```

## How to run bot
Run the following command on terminal.
```bash
$token=<token> node bot.js
```
