{
  // Destructuring
  const user = {
    id: 345,
    name: {
      firstName: 'Neela',
      middleName: 'Rani',
      lastName: 'undefined',
    },
    contactNo: '017333333',
    address: 'Dinajpur',
  };

  const {
    contactNo,
    name: { lastName: lastNam },
  } = user;

  // array destructuring
  const myFriends = [
    'Neela',
    'Tulshi',
    'Sathi',
    'Ruma',
    'Rima',
    'Hayat',
    'Ababil',
  ];

  const [, , , bestFriend, ...rest] = myFriends;
}
