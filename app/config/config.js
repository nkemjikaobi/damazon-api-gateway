const appName = 'api_gateway';
require('dotenv').config();

const config = {
	appName: appName,
	product_service: {
		url: process.env.PRODUCT_SERVICE_URL,
	},
	order_service: {
		url: process.env.ORDER_SERVICE_URL,
	},
	auth_service: {
		url: process.env.AUTH_SERVICE_URL,
		headers: {},
	},
};

module.exports = config;
