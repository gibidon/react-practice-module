import { styled } from 'styled-components';
import { ROLE } from '../../../../constants';
import {
	useDispatch,
	useSelector,
} from 'react-redux';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import {
	Icon,
	Button,
} from '../../../../components';
import {
	Link,
	useNavigate,
} from 'react-router-dom';
import { logout } from '../../../../actions';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const StyledIcon = styled.div`
	&:hover {
		cursor: pointer;
	}
`;

const StyledLogoutIcon = styled.div`
	margin: 0 0 10px 10px;

	&:hover {
		cursor: pointer;
	}
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;
const ControlPanelContainer = (className) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const session = useSelector(selectUserSession);
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	console.log(login, roleId, typeof roleId);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>
						<StyledIcon>
							<Icon
								id="fa-sign-out"
								margin="0 0 0 10px"
								onClick={() =>
									dispatch(logout(session))
								}
							/>
						</StyledIcon>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<StyledIcon onClick={() => navigate(-1)}>
					<Icon
						id="fa-backward"
						margin="10px 0 0 0"
					/>
				</StyledIcon>

				<Link to="/post">
					<Icon
						id="fa-file-text-o"
						margin="10px 0 0 17px"
					/>
				</Link>
				<Link to="/users">
					<Icon
						id="fa-users"
						margin="10px 0 0 17px"
					/>
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(
	ControlPanelContainer,
)``;