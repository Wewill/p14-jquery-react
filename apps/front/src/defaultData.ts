// const defaultData: Employee[] = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     dateOfBirth: "1990-01-01",
//     startDate: "2020-01-01",
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zipCode: "12345",
//     department: "Sales",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Smith",
//     dateOfBirth: "1985-05-15",
//     startDate: "2018-03-15",
//     street: "456 Elm St",
//     city: "Othertown",
//     state: "NY",
//     zipCode: "67890",
//     department: "Marketing",
//   },
//   {
//     firstName: "Alice",
//     lastName: "Johnson",
//     dateOfBirth: "1992-07-20",
//     startDate: "2021-06-01",
//     street: "789 Oak St",
//     city: "Sometown",
//     state: "TX",
//     zipCode: "54321",
//     department: "Engineering",
//   },
//   {
//     firstName: "Bob",
//     lastName: "Brown",
//     dateOfBirth: "1988-11-30",
//     startDate: "2019-09-10",
//     street: "321 Pine St",
//     city: "Anycity",
//     state: "FL",
//     zipCode: "98765",
//     department: "HR",
//   },
//   {
//     firstName: "Charlie",
//     lastName: "Davis",
//     dateOfBirth: "1995-03-25",
//     startDate: "2022-02-14",
//     street: "654 Maple St",
//     city: "Othercity",
//     state: "WA",
//     zipCode: "13579",
//     department: "Finance",
//   },
//   {
//     firstName: "David",
//     lastName: "Wilson",
//     dateOfBirth: "1993-09-12",
//     startDate: "2020-08-20",
//     street: "987 Birch St",
//     city: "Newcity",
//     state: "IL",
//     zipCode: "24680",
//     department: "IT",
//   },
// ];
// export default defaultData;

import type { Employee } from "./types";
import { faker } from "@faker-js/faker";

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newEmployee = (num: number): Employee => {
  return {
    id: num.toString(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: faker.date.birthdate().toISOString(),
    startDate: faker.date.past().toISOString(),
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.helpers.shuffle<Employee["state"]>([
      "CA",
      "NY",
      "TX",
      "FL",
      "WA",
      "IL",
    ])[0]!,
    zipCode: faker.location.zipCode(),
    department: faker.helpers.shuffle<Employee["department"]>([
      "Sales",
      "Marketing",
      "Engineering",
      "HR",
      "Finance",
      "IT",
    ])[0]!,
  };
};

export function makeData(len: number) {
  return range(len).map((index): Employee => {
    return newEmployee(index);
  });
}
export const defaultData = makeData(1000);
