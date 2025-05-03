{
  // spread operator
  // rest operator

  // -----------------------------
  // learn spread operator
  const bros1: string[] = ['Neela', 'Hayat', 'tulshi', 'ababil'];

  const bros2: string[] = ['Tumpa', 'Sathi'];

  bros1.push(...bros2);

  // spread with object
  const mentors1 = {
    typeScript: 'Neela',
    redux: 'Tulshi',
    dmbs: 'Hayat',
    JavaScript: 'Ababil',
  };

  const mentors2 = {
    prisma: 'Tumpa',
    docker: 'Sathi',
    cloud: 'Ababil',
  };
  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator

  const greatFriends = (...friends: string[]) => {
    friends.forEach(friend => console.log(`Hi ${friend}`));
  };

  greatFriends('Neela', 'tulshi', 'sathi');
}
