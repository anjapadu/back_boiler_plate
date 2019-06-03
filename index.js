
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import http from 'http';
import graphRouter from './src/routes/graph'
import middleware from './src/lib/security-middleware'
import path from 'path'
import rateLimit from 'express-rate-limit';
const gzipStatic = require('connect-gzip-static');
import publicRouter from './src/routes/public';

const app = express();
let mw = middleware({
    credentialsRequired: false
})
app.use('/api', mw);
app.disable('x-powered-by');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
var corsOptions = {
    origin: function (origin, callback) {
        return callback(null, true)
        if (allowedOrigins[origin]) {
            return callback(null, true)
        } else {
            callback(new Error('ERR_CORS'))
        }
    }
};

app.use(express.static('public'));
app.use(cors(corsOptions));
app.use('/', publicRouter, graphRouter);
app.use(gzipStatic(path.join(__dirname, './public')));

app.get('*', function (_request, response) {
    response.sendFile(path.resolve(__dirname, './public', 'index.html'))
})
/**
 * Error formatter/handler
 */
app.use(function (err, req, res, next) {
    if (err) {
        switch (err.message) {
            case 'AUTHORIZATION_ERROR':
                return res.status(401).json({
                    code: 403,
                    message: 'Authorization error'
                })
            case 'ERR_CORS':
                return res.status(403).json({
                    code: 403,
                    message: 'Not allowed by CORS'
                });
            default:
                return res.status(err.status || 500).json({
                    code: err.status || 500,
                    message: err.message.charAt(0).toUpperCase() + err.message.slice(1)
                });
        }
    }
    return next()
})

const httpServer = http.createServer(app);
httpServer.listen(5000, () => {
    console.log('HTTP Server running on 5000')
})