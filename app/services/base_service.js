const request = require('requestretry');

class BaseService {
	/**
	 * Send a get request
	 * @param url Request URL.
	 * @param conf Request configuration settings.
	 * @returns {Promise.<*>}
	 */
	get(url, conf, body = undefined) {
		const config = BaseService.getConfig(url, 'GET', body, conf);
		return request(config);
	}

	/**
	 * Send a POST request
	 * @param url Request URL.
	 * @param body Request body.
	 * @param conf Request configuration settings.
	 * @returns {Promise.<*>}
	 */
	post(url, body, conf) {
		const config = BaseService.getConfig(url, 'POST', body, conf);
		return request(config);
	}

	/**
	 * Send a PUT request
	 * @param url Request URL.
	 * @param body Request body.
	 * @param conf Request configuration settings.
	 * @returns {Promise.<*>}
	 */
	put(url, body, conf) {
		const config = BaseService.getConfig(url, 'PUT', body, conf);
		return request(config);
	}

	/**
	 * Send a DELETE request
	 * @param url Request URL.
	 * @param conf Request configuration settings.
	 * @returns {Promise.<*>}
	 */
	delete(url, conf) {
		const config = BaseService.getConfig(url, 'DELETE', null, conf);
		return request(config);
	}

	/**
	 * Build the configuration object for a request
	 * @param url Request URL.
	 * @param body Request body.
	 * @param conf Request configuration settings.
	 * @param method HTTP method for the request
	 * @returns {object}
	 */
	static getConfig(url, method, body, conf) {
		const config = {
			json: true,
			headers: {
				'Content-Type': 'application/json',
			},
			method: method,
			url: url,
			body: body,
		};

		//Handle headers
		if (conf.headers && conf.headers.authorization) {
			config.headers.authorization = conf.headers.authorization;
		}

		return config;
	}

	/**
	 * Adds header config to the existing config
	 * @param {object} conf default config object
	 * @param {object} headers
	 */
	addHeaderAuthorizationConfig(conf, headers = {}) {
		const config = conf;
		config.headers.authorization = headers.authorization;

		return config;
	}
}

module.exports = BaseService;
