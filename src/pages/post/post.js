import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useMatch } from 'react-router-dom';
import { Comments, PostContent, PostForm } from './components';
import { useServerRequest } from '../../hooks';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors';
import { styled } from 'styled-components';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const isEditing = useMatch('/post/:id/edit');
	const isCreating = useMatch('/post');
	const params = useParams();
	const post = useSelector(selectPost);

	useLayoutEffect(() => {
		dispatch(RESET_POST_DATA);
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			return;
		}

		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, params.id, requestServer, isCreating]);

	return (
		<div className={className}>
			{isEditing || isCreating ? (
				<PostForm post={post} />
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={post.id} />
				</>
			)}
		</div>
	);
};

export const Post = styled(PostContainer)`
	padding: 40px 80px;
`;
