const {createServer} = require('https');
const {parse} = require('url');
const next = require('next');
const fs = require('fs');

const dev =process.env.NODE_ENV !== 'production';
const app =next({dev});
const handle = app.getRequestHandler();

const httpsOptions = {
    key: fs.readFileSync('./ssl/private.key'),
    cert: fs.readFileSync('./ssl/certificate.crt'),
    ca: fs.readFileSync('./ssl/ca_bundle.crt')
};

app.prepare()
.then(() => {
    createServer(httpsOptions, (req, res) => {
        const parseUrl = parse(req.url, true);
        handle(req, res, parseUrl);
    }).listen(3000, err => {
        if(err) throw err;
        console.log('> Ready on https://localhost:3000');
    });
});