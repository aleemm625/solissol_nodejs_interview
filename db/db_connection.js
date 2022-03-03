import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/nodejs_solissol_interview', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected');
});

db.on('error', (error) => {
  console.log('Your Error: ', error);
});
