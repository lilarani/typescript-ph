{
  //
  // Ternary Operator || optional chaining || nullish coalescing operator

  // ternary operator
  const age: number = 15;
  if (age >= 18) {
    // console.log('adult');
  } else {
    // console.log('child');
  }

  const isAdult = age >= 18 ? 'Adult' : 'Child';
  // console.log(isAdult);

  // nullish coalescing operator
  // null / undefined --> decision making
  const isAuthenticated = null;
  const result = isAuthenticated ?? 'Guest';
  // console.log(result);

  type User = {
    name: string;
    age: number;
    address: string;
    permanentAddress?: string;
  };

  const user: User = {
    name: 'Neela',
    age: 22,
    address: 'dinjapur',
  };
  const permanerntAddress = user.permanentAddress ?? 'no permanent address';
  console.log(permanerntAddress);
  console.log('file is running');
  //
}
