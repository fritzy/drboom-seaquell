# Dr. Boom: Postgres

![npm i drboom-seaquell](https://nodei.co/npm/drboom-seaquell.png)

Auto-cast errors from `seaquell` into Hapi HTTP Errors.

##Example / Boilerplate

Plugin registration boilerplate:

```javascript
var hapi = require('hapi');
var config = require('./config.json');
var Boom = require('boom');

var server = new hapi.Server();
server.connection(config);

server.register([{
    register: require('drboom')(), 
    options: {
        plugins: [require('drboom-seaquell')()]
    },
}, function (err) {
    server.log(['startup'], 'Loaded pgboom plugin');
    server.start(function (err) {
        //...
    }
});
```

Now, you can pass your seaquell errors right on through to hapi reply!

```javascript
function someHandler(request, reply) {
    SomeSeaquellModel.method(reply);
});
```

