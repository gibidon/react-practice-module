import { useState } from 'react';
import { styled } from 'styled-components';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import { useServerRequest } from '../../../../hooks';

const UserRowContainer = ({
	id,
	className,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] =
		useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] =
		useState(userRoleId);
	const requestServer = useServerRequest();
	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};
	const onRoleSave = (userId, newUserRoleId) => {
		requestServer(
			'updateUserRole',
			userId,
			newUserRoleId,
		).then(() => setInitialRoleId(newUserRoleId));
	};
	const isSaveButtonDisabled =
		selectedRoleId === initialRoleId;

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">
					{login}
				</div>
				<div className="registered-at-column">
					{registeredAt}
				</div>

				<div className="role-column">
					<select
						value={selectedRoleId}
						onChange={onRoleChange}
					>
						{roles.map(
							({
								id: roleId,
								name: roleName,
							}) => (
								<option
									value={roleId}
									key={roleId}
								>
									{roleName}
								</option>
							),
						)}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						disabled={isSaveButtonDisabled}
						onClick={() =>
							onRoleSave(id, selectedRoleId)
						}
					/>
				</div>
			</TableRow>
			<Icon
				id="fa-trash-o"
				margin="0 0 0 10px"
				onClick={onUserRemove}
			/>
		</div>
	);
};
//dsdf
export const UserRow = styled(UserRowContainer)`
	display: flex;
	border: 1px solid #000;
	margin-top: 10px;

	& select {
		padding: 0 5px;
		font-size: 16px;
	}
`;