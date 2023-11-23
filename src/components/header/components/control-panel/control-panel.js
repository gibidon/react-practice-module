import { ROLE } from '../../../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../../selectors';
import { Icon, Button } from '../../../../components';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils';
import { styled } from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
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

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>Hello, {login} !</UserName>
						<Icon id="fa-sign-out" margin="0 0 0 10px" onClick={onLogout} />
					</>
				)}
			</RightAligned>
			<RightAligned>
				<Icon id="fa-backward" margin="10px 0 0 0" onClick={() => navigate(-1)} />

				{isAdmin && (
					<>
						<Link to="/post">
							<Icon id="fa-file-text-o" margin="10px 0 0 17px" />
						</Link>
						<Link to="/users">
							<Icon id="fa-users" margin="10px 0 0 17px" />
						</Link>
					</>
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)``;
