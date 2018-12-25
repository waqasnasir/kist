const { ApolloServer, gql, MockList } = require('apollo-server')
import { typeDefs } from './schema/index'
import { resolvers } from './resolvers'
import {CustomerAPI} from './sources'
const getToken = (req) => {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }
    else if (req.headers.authorization) return req.headers.authorization
    return (req.query && req.query.token) || req.headers['x-access-token']
}
const server = new ApolloServer({
    typeDefs: typeDefs,
   
    dataSources: () => {
        return {
            customerAPI: new CustomerAPI(),
        };
    },
    context: ({req, res}) => ({
        // get the user token from the headers
        token : getToken(req) || ''
      }),
    resolvers, formatError: error => {
        console.log(error);
        //return new Error('Internal server error');
        // Or, you can delete the exception information
        delete error.extensions;
        error.custom = "custom error "
        return error;
    },
})

server.listen().then(({ url }) => {
    console.log('server is listening on', url)
})