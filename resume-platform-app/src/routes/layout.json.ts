import people from '$lib/assets/json/people.json';

const get = async ({}) => {
	return {
		body: {
			...people
		}
	};
};

export { get };
