const userRoute = require('./user');
const httpMocks = require('node-mocks-http');

test('Test express route', () => {
    const req = httpMocks.createRequest({ 
        cookies: { token: 'blablabla' }
      });
    const res = httpMocks.createResponse();
    userRoute.login(req, res);
    expect(res._getData()).toBe('{\"status\":true}');
});