import { getPosts, getComments } from '../api';
import { getCommentsCount } from '../utils';

export const fetchPosts = async () => {
	const [posts, comments] = await Promise.all([getPosts(), getComments()]); //2 requests will be sent simultaneously,time save

	return {
		error: null,
		// res: {
		// 	users,
		// },
		res: posts.map((post) => ({ ...post, commentsCount: getCommentsCount(comments, post.id) })),
	};
};
