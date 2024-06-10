import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const addOneContact = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);

        const newContact = Array.from({ length: number }, createFakeContact);

        const updatedContacts = [...contacts, newContact];

        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');

        console.log(`One contact generated and added to the file.`);
    } catch (error) {
        console.error('Error generating contact:', error);
    }
};

addOneContact(1);
