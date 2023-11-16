import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Comments, PostContent } from './components';
import { useServerRequest } from '../../hooks';
import { loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';
import { styled } from 'styled-components';

const PostContainer = ({ className }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const params = useParams();
	const post = useSelector(selectPost);

	useEffect(() => {
		dispatch(loadPostAsync(requestServer, params.id));
	}, [dispatch, params.id, requestServer]);

	return (
		<div className={className}>
			<PostContent post={post} side="side info here" />
			<Comments comments={post.comments} postId={post.id} />
		</div>
	);
};

export const Post = styled(PostContainer)`
	padding: 40px 80px;
`;
