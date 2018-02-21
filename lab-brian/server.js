'use strict';

const http = require('http');
const url = require('url');
const querystring = require('querystring');
const cowsay = require('cowsay');
const parseBody = require('./lib/parse-body.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer(function(req, res) {
  req.url = url.parse(req.url);
  req.url.query = querystring.parse(req.url.query);

  // http :3000
  if(req.method === 'GET' && req.url.pathname === '/') {
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    });
    res.write('hello from my server!\n');
    res.end();
  }
  // http :3000/cowsay text=='brianis the man'
  // http :3000/cowsay text=='brianis the man' f=='dragon'
  if(req.method === 'GET' && req.url.pathname === '/cowsay') {
    let params = req.url.query;
    if(params.text) {
      res.writeHead(200, {
        'Content-Type': 'text/plain',
      });
      res.write(cowsay.say({ text: params.text, f: params.f }));
    }
    else {
      res.writeHead(400, {
        'Content-Type': 'text/plain',
      });
      res.write(cowsay.say({ text: 'bad request ' }));
    }
    res.end();
  }
  // http POST :3000/cowsay name=brian
  // http :3000/cowsay name=brian f=='dragon'
  if(req.method === 'POST' && req.url.pathname === '/cowsay') {
    let params = req.url.query;
    parseBody(req, function() {
      if(req.body.name) {
        res.writeHead(200, {
          'Content-Type': 'text/plain',
        });
        res.write(cowsay.say({ text: req.body.name, f: params.f }));
      }
      else {
        res.writeHead(400, {
          'Content-Type': 'text/plain',
        });
        res.write(cowsay.say({ text: 'bad request ', f: params.f }));
      }
      res.end();
    });
  }
  // console.log('full req obj', req);
  // console.log('req url: ', req.url);
  // console.log('req method: ', req.method);
});

server.listen(PORT, () => {
  console.log(`server up ${PORT}`);
});