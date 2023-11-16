import { getSession } from './get-session';

export const deleteSession = async (sessionId) => {
	fetch(`http://localhost:3005/sessions/${sessionId}`, {
		method: 'DELETE',
	});
};
