import { getUser } from './get-user';
import { addUser } from './add-user';
// import { createSession } from './create-session';
import { ROLE } from '../constants';
import { sessions } from './sessions';

export const server = {
	async logout(session) {
		sessions.remove(session);
	},
	async authorize(authLogin, authPassword) {
		const user = await getUser(authLogin);

		if (!user) {
			return {
				error: 'user not found',
				res: null,
			};
		}

		if (authPassword !== user.password) {
			return {
				error: 'wrong password',
				res: null,
			};
		}

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},

	async register(regLogin, regPassword) {
		const existeduser = await getUser(regLogin);
		if (existeduser) {
			return {
				error: 'такой логин уже занят',
				res: null,
			};
		}

		const user = await addUser(
			regLogin,
			regPassword,
		);

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				roleId: user.role_id,
				session: sessions.create(user),
			},
		};
	},
};
