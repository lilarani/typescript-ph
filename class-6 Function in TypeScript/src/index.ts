{
  // Learning function
  // Normal Function
  // Arrow Function

  function add(num1: number, num2: number = 10) {
    return (num1 = num2);
  }

  add(2, 3);

  // arrow function
  const arrow = (num1: number, num2: number): number => num1 + num2;

  // object --> function --> method

  const poorUser = {
    name: 'Neela',
    balance: 0,
    addBalance(balance: number): string {
      return `My new Balance is: ${this.balance + balance}`;
    },
  };

  const result = poorUser.addBalance(50);
}
