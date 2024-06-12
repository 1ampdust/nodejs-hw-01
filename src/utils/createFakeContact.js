import { faker } from '@faker-js/faker';

export const createFakeContact = () => {
    return {
        id: faker.datatype.uuid(),
        name: faker.person.fullName(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        jobTitle: faker.person.jobTitle()
    };
};
