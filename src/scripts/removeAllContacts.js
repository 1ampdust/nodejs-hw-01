import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    try {
        await fs.writeFile(PATH_DB, '[]', 'utf-8');
        console.log('All contacts removed from the file.');
    } catch (error) {
        console.error('Error removing contacts:', error);
    }
};

removeAllContacts();