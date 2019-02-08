
export default {
    customers:(_source,{}, { dataSources, token }) => { 
        console.log('called',token); 
        return dataSources.customerAPI.getCustomers()
    }
}