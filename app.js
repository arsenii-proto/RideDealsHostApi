
var path        = require('path')
    express     = require('express'),
    bodyParser  = require('body-parser'),
    morgan      = require('morgan'),
    app         = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    
    next()
})

app.post('/api/test', require('jayson').server({

    make: (args, res) => {

        res(null, {
            somthing: 'good yeah',
            args
        })
    }

}).middleware());

require('fs').readdir('./controllers', (e, files) => files.forEach(file => '.js' === path.extname(file) && ( require('./controllers/' + file) )))

app.listen(3000);