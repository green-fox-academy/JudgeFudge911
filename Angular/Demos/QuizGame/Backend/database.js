'use strict';
const mongoose = require('mongoose');

mongoose.connect(
  `mongodb://admin:${
    process.env.MONGO_ATLAS_PASSWORD
  }@quiz-shard-00-00-vts6l.mongodb.net:27017,quiz-shard-00-01-vts6l.mongodb.net:27017,quiz-shard-00-02-vts6l.mongodb.net:27017/test?ssl=true&replicaSet=quiz-shard-0&authSource=admin&retryWrites=true`,
  { useNewUrlParser: true }
);

module.exports = mongoose;
