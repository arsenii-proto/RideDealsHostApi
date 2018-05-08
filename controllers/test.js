var express     = require('express'),
    app         = express();
    jayson      = require('jayson')
    _           = require('underscore')

app.post('/api/test', jayson.server({
    
    make: (args, res) => {

        res(null, {
            somthing: 'good'
        })
    }

}).middleware());