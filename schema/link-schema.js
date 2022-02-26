export const LinkSchema = {
	name: "links",
	properties: {
		_id: 'int',
		actualURL: 'string',
		shortenedURL: 'string',
	},
	primaryKey: "_id",
};