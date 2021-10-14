const fastify = require('fastify')({
  logger: {
    prettyPrint: true,
    /* file: 'logs.log', */
  },
});

async function asd(axios) {
  fastify.register(require(axios));

  // request via axios.get
  const data = await fastify.axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  console.log('ASDASD', data);
  return 'asd';
}

const cors = require('fastify-cors');
const axios = require('fastify-axios');

// Declare a route
fastify.get('/', async (request, reply) => {
  /*   reply.send(asd(axios)); */
  const data = await fastify.axios.get(
    'https://api.themoviedb.org/3/tv/popular?api_key=7021d08bd7f9b27520aad2294bcd9e18&language=en-US&page=2'
  );
  console.log('ASDASD', data);
  reply.send('data');
});

// Plugins
fastify.register(cors);
fastify.register(axios);

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
