{
  //  Abstraction in OOP
  // 1.interface  2.abstract

  // idea
  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // const vehicle1: Vehicle1 = {
  //   name: 'Toyota',
  //   model: 200,
  // };

  // class
  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting car engine`);
    }
    stopEngine(): void {
      console.log(`I am stoping car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(` I am just testing`);
    }
  }

  const toyotaCar = new Car1();

  toyotaCar.startEngine();

  // abstract class
  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(` I am just testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
      console.log(`I am stoping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
  }
  const myCar = new ToyotaCar();
  myCar.move();

  // Abstract class দিয়ে কখনো object বানানো যায় না! কারণ এটা শুধু "idea" বা "blueprint" — বাস্তব object তৈরি করতে subclass লাগবে।

  // const hondaCar = new Car2();
  // hondaCar.startEngine();
  //
}
