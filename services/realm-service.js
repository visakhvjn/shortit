import Realm from "realm";
const LINK_SCHEMA = 'Link';

const app = new Realm.App({ id: "shortit-bcqmk" });
const credentials = Realm.Credentials.anonymous();

console.log(app);
console.log(credentials);

try {
  const user = await app.logIn(credentials);
	console.log(user);
} catch(err) {
  console.error("Failed to log in", err);
}

const LinkSchema = {
	name: LINK_SCHEMA,
	primaryKey: '_id',
	properties: {
		_id: 'int',
		shortURL: { type: 'string' },
		longURL: { type: 'string' },
	}
};

const databaseOptions = {
	schema: [LinkSchema],
	sync: {
		user: app.currentUser,
		partitionValue: app.currentUser.id
	}
}

export async function insert(data) {

	console.log(data);

	const realm = await Realm.open(databaseOptions);

	console.log(realm);
	
	realm.write(() => {
		data._id = Math.floor(Date.now());
		realm.create(LINK_SCHEMA, data);
	});
}