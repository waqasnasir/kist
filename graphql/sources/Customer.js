const { RESTDataSource } = require('apollo-datasource-rest')
const { 
    AuthenticationError, 
  } = require('apollo-server');
const customers = [
    {
        name: 'waqas',
        cnic: 'test'
    }
]
class Customer extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:8000/';
    }
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getCustomers() {
        const data = await this.get('customers', {})
        if (!data.success) {
            throw new AuthenticationError('Token might not be valid', {
                error: data,
            });
        }
        return data.data
    }

    async getlimitedTodo(limit = 10) {
        const data = await this.get('todos', {
            per_page: limit,
        });
        return data.results;
    }
}
export default Customer