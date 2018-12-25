
export default {
    customers:(_source, { id }, { dataSources, token })=> { console.log('called',token); return dataSources.customerAPI.getCustomer(1)}
}