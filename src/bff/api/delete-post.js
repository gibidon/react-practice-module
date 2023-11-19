export const deletePost = (postId) => {
	console.log(postId);
	fetch(`http://localhost:3005/posts/${postId}`, {
		method: 'DELETE',
	});
};
