import { H2, Icon } from '../../../../components';
import { styled } from 'styled-components';

const PostContentContainer = ({
	className,
	post: { title, imageUrl, content, publishedAt }, //wtf??
	// post,
	side,
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon id="fa-calendar-o" margin=" 0 10px 0 0" size="18px" onClick={() => {}} />
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon id="fa-pencil-square-o" margin=" 0 20px 0 0" size="21px" onClick={() => {}} />
					<Icon id="fa-trash-o" margin=" 0 10px 0 0" onClick={() => {}} />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	);
	// return (
	// 	<div className={className}>
	// 		{side}
	// 		<p>static info to check</p>
	// 		<img src={post.imageUrl} alt={post.title} />
	// 		<H2>{post.title}</H2>
	// 		<div className="special-panel">{post.publishedAt}</div>
	// 		<div>{post.content}</div>
	// 	</div>
	// );
};

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
	}

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& i {
		position: relative;
		font-size: 18px;
		top: -1px;
	}

	& .buttons {
		display: flex;
	}
`;
