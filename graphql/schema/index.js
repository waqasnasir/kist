const { gql } = require('apollo-server')

export const typeDefs = gql`
# all schame definations goes here. 
    type Customer {
        id      : Int,
        name    : String,
        cnic    : String,
        phone   : String,
        address : String,
        Owner   : User
    },
    type User {
        id          : Int,
        username    : String,
        email       : String,
        password    : String,
        status      : String,
    },
# all queries goes here
    type Query {
        customers : [Customer], 
    }

    # The mutation root type, used to define all mutations.
    type Mutation { # A mutation to add a new channel to the list of channels
        addCustomer(name: String!): Customer
    }
`;
// const schema = makeExecutableSchema({ typeDefs });
// addMockFunctionsToSchema({ schema });
