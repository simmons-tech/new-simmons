import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	return {
		title: `Student Officers`,
		description: ``,
		...data
	};
};
