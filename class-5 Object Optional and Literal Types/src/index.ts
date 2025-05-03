{
  // Reference Type --> Object
  const user: {
    firstName: string;
    middleName?: string;
    lastName: string;
    // company: 'Instyle by Neela'; //type --> literal types
    readonly company: string;
  } = {
    firstName: 'Neela',
    middleName: 'Nai',
    lastName: 'Rani',
    company: 'Instyle by Neela',
  };
}
