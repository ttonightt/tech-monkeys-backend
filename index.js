const app = require("./app");
const logger = require("./src/utils/logger");
const config = require("./src/utils/config");

app.listen(config.PORT, '0.0.0.0', () => {

	logger.info(`Server running on port ${config.PORT}`);
	logger.info(`Server accessible at http://localhost:${config.PORT}`);
	logger.info(`For mobile devices, use your computer's IP address: http://YOUR_IP:${config.PORT}`);
});