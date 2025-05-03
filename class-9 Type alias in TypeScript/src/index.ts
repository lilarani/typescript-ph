{
  // Type Alias
  type Student = {
    name: string;
    age: number;
    roll: number;
    gender: string;
    contact?: string;
    address: string;
  };

  const student1: Student = {
    name: 'Neela',
    age: 22,
    roll: 23,
    gender: 'Female',
    contact: '0123344',
    address: 'Dinajpur',
  };

  const student2: Student = {
    name: 'Tulshi',
    age: 21,
    roll: 12,
    gender: 'Female',
    contact: '012344',
    address: 'Rangpur',
  };

  // ----------------
  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = 'Persian';
  const isAdmin: IsAdmin = true;

  // function
  type Add = (num1: number, num2: number, num3: number) => number;
  const add: Add = (num1, num2, num3) => num1 + num2 + num3;
  //
}
