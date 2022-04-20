const serviceLocator = require('./service-locator');
const AuthService = require('../services/auth_service');
const config = require('./config');

serviceLocator.register('authService', () => {
	return new AuthService(config.auth_service);
});

module.exports = serviceLocator;
