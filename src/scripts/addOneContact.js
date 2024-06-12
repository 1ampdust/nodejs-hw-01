import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const addOneContact = async () => {
  try {
    const contact = createFakeContact();
    const contacts = JSON.parse(await fs.readFile(PATH_DB));
    const updatedContacts = [...contacts, contact];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log('Added one contact to the database.');
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
};

await addOneContact();