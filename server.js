const app = require('express');

const io = require('socket.io')(server);
  

const server = app.listen(4000, () => {
  console.log('app rodando => http://localhost:4000');
});