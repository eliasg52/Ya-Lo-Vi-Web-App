const fastify = require('fastify');

module.exports = async function asd(fastify, opts) {
  fastify.register(require('fastify-axios'));

  // request via axios.get
  const { title } = await fastify.axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  console.log('body size: %d', title.length);
};
