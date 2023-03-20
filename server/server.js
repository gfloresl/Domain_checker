import express from 'express';
import controller from './controller.js'
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config();
const __dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + '/build'));

app.get('/whois/:query', controller.validateQuery, controller.fetchToApi, (req, res)=>{
  return res.status(200).json(res.locals.data);
});

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(err);
  res.status(500).json(errorObj);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
