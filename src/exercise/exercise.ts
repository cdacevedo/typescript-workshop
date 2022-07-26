// Partial, Required and Readonly
// Create objects from Person interface and make examples
interface Person {
  name: string;
  lastname: string;
  age: number;
  gender?: 'male' | 'female';
  isOld?: boolean;
  company: string;
}

// Record
// Create an object from CatName type
type CatName = 'zoe' | 'blacky' | 'alaska';

interface CatInfo {
  name: string;
  age: number;
}

// Pick and Omit
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoPreview = Todo; // remove 'description' attribute

// Exclude and Extract
// Extract and exclude literal types from the next
// types and use in an object
type a = 'a' | 'b' | 'c';
type b = 'b';

export {};
