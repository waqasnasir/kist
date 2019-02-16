import simpleRestProvider from 'ra-data-simple-rest';

const restProvider = simpleRestProvider('https://reqres.in/');
export default (type, resource, params) =>
    new Promise(resolve =>
        setTimeout(() => resolve(restProvider(type, resource, params)), 500)
    );
