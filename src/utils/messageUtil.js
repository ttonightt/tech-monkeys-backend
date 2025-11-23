const devData = require("../assets/dev.json");

const data = devData;


const { historyTitles, role } = data;

const build = ( history, prompt, type ) => {

	return `
		${role}
		${
			Object
				.entries(historyTitles)
				.map( ([ key, value ]) =>

					value === undefined || history[key] === undefined
					?
					undefined
					:
					`# ${value}:
					${history[key]}
					`
				)
				.filter( item => item !== undefined )
				.join("")
		}
		# You have to output in this json format:
		${type}
		# Current message by user:
		${prompt}
	`;
};

module.exports = {
	build
};