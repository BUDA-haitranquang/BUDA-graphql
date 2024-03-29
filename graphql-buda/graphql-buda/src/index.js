const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./schema');
const { resolvers } = require('./resolver');
const Budabackend = require('./api');
const issueServicebackend = require('./issue-service');
const authenticationServicebackend = require('./authentication-service');
const notifierServicebackend = require('./notifier-service');
const paymentServicebackend = require('./payment-service');



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
      authenticationService: new authenticationServicebackend(),
      notifierService: new notifierServicebackend(),
      paymentService: new paymentServicebackend(),
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
