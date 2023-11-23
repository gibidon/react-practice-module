import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useServerRequest } from '../../../../hooks';
import { Icon } from '../../../../components';
import { Comment } from './components/comment';
import { selectUserId, selectUserRole } from '../../../../selectors';
import { addCommentAsync } from '../../../../actions';
import { styled } from 'styled-components';
import { ROLE } from '../../../../constants';

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('');
	const userId = useSelector(selectUserId);
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const userRole = useSelector(selectUserRole);

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content));
		setNewComment('');
	};

	const isGuest = userRole === ROLE.GUEST;
	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						value={newComment}
						name="comment"
						placeholder="Комментарии.."
						onChange={({ target }) => {
							setNewComment(target.value);
						}}
					></textarea>
					<Icon
						id="fa-paper-plane-o"
						margin=" 0 0 0 10px"
						size="18px"
						onClick={() => onNewCommentAdd(userId, postId, newComment)}
					/>
				</div>
			)}

			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment
						id={id}
						key={id}
						author={author}
						postId={postId}
						content={content}
						publishedAt={publishedAt}
					/>
				))}
			</div>
		</div>
	);
};

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}

	& .new-comment textarea {
		resize: none;
		height: 120px;
		width: 550px;
		font-size: 18px;
	}

	& .post-text {
		font-size: 18px;
	}
`;
