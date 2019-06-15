const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const resolvers = require('./resolvers.js');

const ActivityAPI = require('./datasources/activity');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    ActivityAPI: new ActivityAPI(),
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Team 9 server ready at ${url}`);
});