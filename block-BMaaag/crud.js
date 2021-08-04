db.user.insert({
  name: 'User1',
  email: 'xyz@gmail.com',
  age: 24,
  gender: 'male',
});

db.users.insertMany([
  { name: 'Dhauldhar range', height: '4000 mtrs' },

  {
    name: 'User3',
    email: 'xyz2@gmail.com',
    age: 24,
    gender: 'male',
  },
  {
    name: 'User4',
    email: 'xyz4@gmail.com',
    age: 24,
    gender: 'male',
  },
]);

db.users.update(
  { name: 'User5' },
  { age: 20, email: 'pqr@gmail.com' },
  { upsert: true }
);

db.himalayas.insertMany([
  { name: 'Dhauldhar range', height: '4000 mtrs' },
  { name: 'Arvali range', height: '7000 mtrs' },
  { name: 'Shivalik range', height: '5000 mtrs' },
  { name: 'Nilgiri range', height: '8000 mtrs' },
]);
