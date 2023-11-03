import { getUser } from './get-users';
import { addUser } from './add-user';
import { createSession } from './create-session';

export const server = {
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
			res: createSession(user.role_id),
		};
	},

	async register(regLogin, regPassword) {
		const user = await getUser(regLogin);
		if (user) {
			return {
				error: 'такой логин уже занят',
				res: null,
			};
		}
		await addUser(regLogin, regPassword);

		return { error: null, res: user.role_id };
	},
};
