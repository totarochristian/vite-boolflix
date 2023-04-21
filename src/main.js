const express = require('express');
const cors = require('cors');

const appCors = express();

// 👇️ configure CORS
appCors.use(cors());

appCors.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'});
});

const PORT = 3456;

appCors.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});

import { createApp } from 'vue'
import App from './App.vue'

import './assets/styles/general.scss'

createApp(App).mount('#app');
