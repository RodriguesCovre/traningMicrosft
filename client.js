const http = require('http');

const options = {
  port: 3000,
  hostname: 'localhost',
  path: '/users',
  headers: {
    authorization: 'senhaSuperSecreta'
  },
};

const req = http.get(options, (res) => {
  console.log(`Conectar- Status Código ${res.statusCode}`);

  res.on('data', (chunk) => {
    console.log("Chunk data: ", chunk.toString());
  });

  res.on('end', () => {
    console.log('sem data');
  });

  res.on('close', () => {
    console.log('Conexao fechada');
  });
});

req.on('error', (error) => {
  console.error('Ocoreu um erro: ', error);
});

req.end();
