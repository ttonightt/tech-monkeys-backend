const app = require("./app");
const logger = require("./src/utils/logger");
const config = require("./src/utils/config");

app.listen(config.PORT, () => {

	logger.info(`Server running on port ${config.PORT}`);
});