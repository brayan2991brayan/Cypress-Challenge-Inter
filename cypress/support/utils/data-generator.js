import { faker } from '@faker-js/faker';

export const generateUserData = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
    mobile: faker.phone.number('##########'),
    dateOfBirth: {
      day: faker.number.int({ min: 1, max: 28 }).toString().padStart(3, '0'),
      month: faker.helpers.arrayElement([
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]),
      year: faker.number.int({ min: 1960, max: 2000 }).toString()
    },
    subjects: [faker.helpers.arrayElement(['Math', 'Physics', 'Chemistry', 'Biology'])],
    hobbies: [faker.number.int({ min: 1, max: 3 })],
    address: faker.location.streetAddress()
  };
};

export const generateRandomString = (length = 10) => {
  return faker.string.alphanumeric(length);
};

export const generateRandomNumber = (min = 1, max = 100) => {
  return faker.number.int({ min, max });
}; 