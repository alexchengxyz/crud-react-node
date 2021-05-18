const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send('99');
});

app.listen(3001, () => {
  console.log('run on port 3001');
});