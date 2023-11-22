import { Icon, Input } from '../../../../components';
import { styled } from 'styled-components';

const SearchContainer = ({ className, seachPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input placeholder="Поиск по заголовкам.." value={seachPhrase} onChange={onChange} />
			<Icon id="fa-search" inactive={true} size="21px" />
		</div>
	);
};

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	top: 10px;
	margin: 0 auto;
	width: 340px;
	height: 40px auto 0;

	& > input {
		padding: 10px 32px 10px 10px;
	}

	& > div {
		position: absolute;
		top: 3px;
		right: 9px;
	}
`;
