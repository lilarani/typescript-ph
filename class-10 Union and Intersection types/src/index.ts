{
  //
  // union types
  // Intersection Types
  // union types
  // type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
  // type fullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper';
  // type Developer = FrontendDeveloper | fullstackDeveloper;
  // const newDeveloper: FrontendDeveloper = 'fakibazDeveloper';
  // type User = {
  //   name: string;
  //   email?: string;
  //   gender: 'male' | 'female';
  //   bloodGroup: 'O+' | 'A+' | 'B';
  // };
  // const user: User = {
  //   name: 'Neela',
  //   email: 'neela@gmail.com',
  //   gender: 'female',
  //   bloodGroup: 'A+',
  // };
  // ************ Intersection types ************
  type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer';
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer';
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullStackDeveloper = {
    skills: ['HTML', 'Js'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer',
  };
  //
}
