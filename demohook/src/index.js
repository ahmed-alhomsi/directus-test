import { createError } from "@directus/errors";

const invalidPayloadError = createError('INVALID_PAYLOAD_ERROR', 'something went wrong...', 500);

export default ({ filter }) => {
	

	filter('items.create', async (input) => {
		if(input == NULL | "") {
			throw new invalidPayloadError();
		}

		console.log("Action is: ", filter);
		return input;
	});
};
