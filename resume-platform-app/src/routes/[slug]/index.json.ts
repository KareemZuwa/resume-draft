import people from '$lib/assets/json/people.json';

const get = async ({ params }) => {
    console.log(params)
	let slugUser = Object.values(params);
	console.log(slugUser);

	return {
		body: {
			...people['A'][0]
			// ...params
		}
	};
};

export { get };
