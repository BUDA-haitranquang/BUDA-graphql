const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolver');
const Budabackend = require('./api');
const issueServicebackend = require('./issue-service');
<<<<<<< Updated upstream
=======
const authenticationServicebackend = require('./authentication-service');
const notifierServicebackend = require('./notifier-service');
>>>>>>> Stashed changes


const server = new ApolloServer({
  typeDefs, resolvers,
  // //cache: new BaseRedisCache({
  //  // client: new Redis({
  //  //   host: '192.168.1.10',
  //  //   port: 6379,
  //     db: 5,
  //   }),
  // }),
  //plugins: [responseCachePlugin()],
  dataSources: () => {
    return {
      buda: new Budabackend(),
      issueService: new issueServicebackend(),
<<<<<<< Updated upstream
=======
      authenticationService: new authenticationServicebackend(),
      notifierService: new notifierServicebackend()
>>>>>>> Stashed changes
    };
  },
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return {
      token: token
    };
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
