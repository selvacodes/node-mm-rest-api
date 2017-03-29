const auth = require('../lib/auth');
const sites = require('../lib/sites');
const request = require('superagent');
const config = require('../mock/superagent-mock');
var superagent = require('superagent-mock')(request, config);

describe('site.getAll()', () => {
  it('lists meta info of all available sites', () => {
    var authPath = 'https://api-auth-eu.maxymiser.com';
    var basePath = 'https://api-eu.maxymiser.com/v1';
    var credentials = {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      username: 'username',
      password: 'password'
    };
    var authorize = auth.authorize(token, authPath, credentials);
    var s = sites(basePath, authorize);
    var expectedResult = [{
      id: 'MzIxMzM',
      name: 'www.test.com'
    }, {
      id: 'MzIxMzI=',
      name: 'm.test.com'
    }];
    var token;

    return s.getAll()
      .then(sites => {
        expect(sites).toEqual(expectedResult);
      });
  });
});