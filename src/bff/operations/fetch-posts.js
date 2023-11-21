import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async (page, limit) => {
	const [{ posts, links }, comments] = await Promise.all([getPosts(page, limit), getComments()]); //2 requests will be sent simultaneously,time save

	console.log(links);

	return {
		error: null,
		// res: {
		// 	users,
		// },
		res: {
			posts: posts.map((post) => ({ ...post, commentsCount: getCommentsCount(comments, post.id) })),
			links,
		},
	};
};
