
import customerQueries from './customer.queries'
export const resolvers = {
  Query: {
    ...customerQueries
  },

  Mutation: {

  },
  Customer: {
    Owner: async (user, _, { dataSources }) => {
      const result = await dataSources.userAPI.getUserById(user.owner_id);
      return result
    },
    deals: async (user, { }, { dataSources }) => {
      const result = await dataSources.dealAPI.getDealsByCustomerId(user.id);
      return result
    },
  },
}
