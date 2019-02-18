import { RESTDataSource } from 'apollo-datasource-rest';
import { AuthenticationError } from 'apollo-server';
class User extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:8000/';
  }
  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }
  async getUsers() {
    const data = await this.get('users', {})
    if (!data.success) {
      throw new AuthenticationError('Token might not be valid', {
        error: data,
      });
    }
    return data.data
  }
  async getUserById(id) {
    const data = await this.get(`user/${id}`, {})
    if (!data.success) {
      throw new AuthenticationError(data.message, {
        error: data,
      });
    }
    return data.data
  }
}
export default User