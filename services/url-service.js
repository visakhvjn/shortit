import shortid from 'shortid';
import { insert } from './realm-service.js';

export async function createURL(url) {

	const newShortId = shortid.generate();

	const data = {
		shortURL: newShortId,
		longURL: url,
	};

	await insert(data);
}