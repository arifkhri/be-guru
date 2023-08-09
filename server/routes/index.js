import express from 'express';

const router = express.Router();

router.get('/', function(req, res) {
  res.send('api be-api-guru-app is running !');
});

module.exports = router
