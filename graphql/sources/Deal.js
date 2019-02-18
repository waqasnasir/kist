import { RESTDataSource } from 'apollo-datasource-rest';
import { AuthenticationError } from 'apollo-server';

class Deal extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:8000/';
    }
    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getDealsByCustomerId(id) {
        const data = await this.get(`deals/customer/${id}`, {})
        if (!data.success) {
            throw new AuthenticationError(data.message, {
                error: data,
            });
        }
        return data.data
    }
}
export default Deal