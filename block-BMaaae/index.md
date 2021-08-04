writeCode

Write code to:-

- create a database named `sports`.

```js
use sports
```

- list all databases present in local mongod server.

```js
 show dbs
```

- create 3 collections named `cricket`, `football`, `TT` in sports databse.

```js
db.createCollection('cricket');
db.createCollection('football');
db.createCollection('TT');
```

- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.

```js
db.cricket.insertOne({
  name: 'bitopan',
  age: 24,
  email: 'bitopan@gmail.com',
  'bid-price': 2000,
});
db.cricket.find();
db.football.insertOne({
  name: 'suraj',
  age: 34,
  email: 'suraj@gmail.com',
  'bid-price': 3000,
});
db.TT.insertOne({
  name: 'Vikash',
  age: 31,
  email: 'vikash@gmail.com',
  'bid-price': 4000,
});
```

- list all collections in sports database.
- rename `TT` collection to `tennis`.

```js
db.TT.renameCollection('tennis');
```

- create a capped collection called `khokho` which should have max 3 documents.

```js
db.createCollection('Khokho', { capped: true, size: 1024, max: 3 });
```

Try inserting more than 3 and see what happens?

```js
db.Khokho.insertMany([{ Manash: 5 }, { bul: 4 }, { amulya: 7 }]);
db.Khokho.insert({ Hemen: 8 });
```

- check whether a collection is capped or not?

```js
db.Khokho.isCapped();
```

- drop all documents from `football` collection.

```js
db.football.drop();
```

- delete cricket collection completely.

```js
db.football.remove();
```

- delete sports database.

```js
db.dropDatabase();
```

- check which database you are connected to ?
<!-- sports -->
- connect to test database
