export type Skills = {
    name: string;
    count: number;
  };
export type User = {
    _id?: string;
    name?: string;
    age?: number;
    height?: number;
    skills?: Skills[];
};

export interface UserI {
  _id: string;
  name: string;
  age: number;
  height: number;
  skills?: Skills[];
};