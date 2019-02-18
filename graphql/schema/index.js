const { gql } = require('apollo-server')

export const typeDefs = gql`
# all schema definations goes here. 
    type Customer {
        id      : Int,
        name    : String,
        cnic    : String,
        phone   : String,
        address : String,
        Owner   : User,
        deals   : [Deal]
    },
    type User {
        id          : Int,
        username    : String,
        email       : String,
        password    : String,
        status      : String,
        customers   : [Customer]
        deals       : [Deal]
    },
    type Deal {
        item                : String,
        item_price          : Int,
        item_description    : String,
        amount              : Int,
        monthly_installment : Int,
        advance             : Int,
        gaurantor_mbl       : String,
        gaurantor_name      : String,
        gaurantor_address   : String,
        customer            : Customer,
        owner               : User,
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
