import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const express = require('express');
const server = express();
const rick = require('../src/Data/rick.json');

server.get('/personagens', (req,res) => {
  return res.jason(personagens)
});

server.listen(3001, () => {
console.log('está funcionando...')

});